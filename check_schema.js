const { createClient } = require('@supabase/supabase-js');
const url = 'https://vknibpdhovgcbenkcnaz.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbmlicGRob3ZnY2JlbmtjbmF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk5OTcwNSwiZXhwIjoyMDg3NTc1NzA1fQ.nUr9s0h8noHP6MxZujQS6MG2lcGfK5GyNe1iL5vuCB8';

const supabase = createClient(url, key);

async function checkSchema() {
    console.log("Checking columns for 'activities' table...");
    // We can't directly query schema without more permissions usually, 
    // but we can check if there are other columns by doing a select * on a record that might have them.
    // Or we can try to guess common names like 'image_url', 'images', 'gallery'.

    const { data, error } = await supabase
        .from('activities')
        .select('*')
        .limit(1);

    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Record keys:", Object.keys(data[0]));
    }
}

checkSchema();
