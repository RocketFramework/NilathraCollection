import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vknibpdhovgcbenkcnaz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbmlicGRob3ZnY2JlbmtjbmF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk5OTcwNSwiZXhwIjoyMDg3NTc1NzA1fQ.nUr9s0h8noHP6MxZujQS6MG2lcGfK5GyNe1iL5vuCB8';
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkHotels() {
    const { data: adminData, error: adminError } = await supabase.from('hotels').select('*');
    console.log("Admin Data:", adminData?.length, "records");
    if (adminError) console.error("Admin error:", adminError);
    if (adminData?.length) console.log(adminData[0]);

    // Check with anon key
    const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbmlicGRob3ZnY2JlbmtjbmF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5OTk3MDUsImV4cCI6MjA4NzU3NTcwNX0.gllt4Cf-5PSd4mnxZYDfcEemZPPQBNJUSr93xziVwAY';
    const anonClient = createClient(supabaseUrl, anonKey);
    const { data: anonData, error: anonError } = await anonClient.from('hotels').select('*');
    console.log("Anon Data:", anonData?.length, "records");
    if (anonError) console.error("Anon error:", anonError);
}

checkHotels();
