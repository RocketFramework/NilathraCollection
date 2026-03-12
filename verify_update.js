const { createClient } = require('@supabase/supabase-js');
const url = 'https://vknibpdhovgcbenkcnaz.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbmlicGRob3ZnY2JlbmtjbmF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk5OTcwNSwiZXhwIjoyMDg3NTc1NzA1fQ.nUr9s0h8noHP6MxZujQS6MG2lcGfK5GyNe1iL5vuCB8';

const supabase = createClient(url, key);

async function verify() {
    console.log("Verifying Hot Air Ballooning record...");
    const { data, error } = await supabase
        .from('activities')
        .select('id, activity_name, images')
        .eq('id', 1);

    if (error) {
        console.error("Verification failed:", error.message);
    } else {
        console.log("Record found:", JSON.stringify(data, null, 2));
        if (data[0].images && data[0].images.length === 3) {
            console.log("SUCCESS: Database record updated correctly with 3 images.");
        } else {
            console.log("WARNING: Database record might not have the correct images yet. Please ensure you ran the SQL migration.");
        }
    }
}

verify();
