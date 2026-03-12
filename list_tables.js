const { createClient } = require('@supabase/supabase-js');
const url = 'https://vknibpdhovgcbenkcnaz.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbmlicGRob3ZnY2JlbmtjbmF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk5OTcwNSwiZXhwIjoyMDg3NTc1NzA1fQ.nUr9s0h8noHP6MxZujQS6MG2lcGfK5GyNe1iL5vuCB8';

const supabase = createClient(url, key);

async function listTables() {
    console.log("Listing tables (via a trick since we can't query information_schema directly easily)...");
    // We can try to query common table names or use a query that fails to see what's suggested?
    // Actually, let's try to query the supabase internal tables if we have access.

    // Another way: try to select from 'activity_images' or 'images'
    const tablesToTry = ['activity_images', 'images', 'galleries', 'activity_gallery'];
    for (const table of tablesToTry) {
        const { error } = await supabase.from(table).select('*').limit(1);
        if (!error) {
            console.log(`Table found: ${table}`);
        } else if (error.code !== '42P01') { // 42P01 is "relation does not exist"
            console.log(`Table ${table} might exist but had error: ${error.message}`);
        }
    }
}

listTables();
