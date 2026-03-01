import { createClient } from '@supabase/supabase-js';
import { UserProfileDTO, CreateAgentDTO } from '../dtos/user-vendor.dto';
import { createAdminClient } from '../utils/supabase/admin';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export class UserService {
    static async getCurrentUserProfile(): Promise<UserProfileDTO | null> {
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        if (authError || !user) return null;

        // Check tourist profile
        const { data: tourist } = await supabase.from('tourist_profiles').select('*').eq('id', user.id).single();
        if (tourist) return { ...tourist, role: 'tourist' };

        // Check agent profile
        const { data: agent } = await supabase.from('agent_profiles').select('*').eq('id', user.id).single();
        if (agent) return { ...agent, role: 'agent' };

        // Check admin profile
        const { data: admin } = await supabase.from('admin_profiles').select('*').eq('id', user.id).single();
        if (admin) return { ...admin, role: 'admin' };

        return { id: user.id };
    }

    static async getUserRole(userId: string): Promise<string | null> {
        const { data, error } = await supabase.rpc('get_user_role', { user_id: userId });
        if (error) throw error;
        return data;
    }
}

export class TouristService {
    static async updateProfile(userId: string, profileData: Partial<UserProfileDTO>) {
        const { data, error } = await supabase
            .from('tourist_profiles')
            .update({
                first_name: profileData.first_name,
                last_name: profileData.last_name,
                phone: profileData.phone,
                country: profileData.country
            })
            .eq('id', userId)
            .select()
            .single();
        if (error) throw error;
        return data;
    }
}

export class AgentService {
    // Agent specific service methods
    static async getAssignedTours(agentId: string) {
        const { data, error } = await supabase.from('tours').select('*').eq('agent_id', agentId);
        if (error) throw error;
        return data;
    }
}

export class AdminService {
    static async getAllAgents() {
        const supabaseAdmin = createAdminClient();
        const { data, error } = await supabaseAdmin
            .from('agent_profiles')
            .select('id, first_name, last_name, is_active')
            .eq('is_active', true)
            .order('first_name', { ascending: true });

        if (error) throw error;
        return data;
    }

    static async assignAgentToRequest(requestId: string, agentId: string) {
        const supabaseAdmin = createAdminClient();
        const { data, error } = await supabaseAdmin
            .from('requests')
            .update({ admin_assigned_to: agentId, status: 'Assigned' })
            .eq('id', requestId)
            .select()
            .single();

        if (error) throw error;
        return data;
    }

    static async createAgent(dto: CreateAgentDTO) {
        if (!dto.first_name || !dto.last_name || !dto.email || !dto.password) {
            throw new Error("First Name, Last Name, Email, and Password are required.");
        }

        const supabaseAdmin = createAdminClient();

        // 1. Create user in Supabase Auth via Admin API
        const { data: authUser, error: authError } = await supabaseAdmin.auth.admin.createUser({
            email: dto.email,
            password: dto.password,
            email_confirm: false,
            user_metadata: {
                first_name: dto.first_name,
                last_name: dto.last_name,
                phone: dto.phone || ''
            }
        });

        if (authError) throw new Error(`Auth creation failed: ${authError.message}`);
        if (!authUser.user) throw new Error("User creation failed, no user returned.");

        const newUserId = authUser.user.id;

        // 2. Fetch the 'agent' role ID
        const { data: roleData, error: roleError } = await supabaseAdmin
            .from("roles")
            .select("id")
            .eq("name", "agent")
            .single();

        if (roleError || !roleData) throw new Error("Failed to locate agent role. Did you create it?");

        // 3. Assign User Role
        const { error: assignError } = await supabaseAdmin
            .from("user_roles")
            .insert([{ user_id: newUserId, role_id: roleData.id }]);

        if (assignError) throw new Error("Agent account created, but role assignment failed.");

        // 4. Create Agent Profile
        const { error: profileError } = await supabaseAdmin
            .from("agent_profiles")
            .insert([{
                id: newUserId,
                first_name: dto.first_name,
                last_name: dto.last_name,
                phone: dto.phone || null,
                is_active: true
            }]);

        if (profileError) throw new Error("Agent role assigned, but profile creation failed.");

        return { id: newUserId, ...dto };
    }
}
