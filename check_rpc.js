const { createClient } = require('@supabase/supabase-js');
const url = 'https://vknibpdhovgcbenkcnaz.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbmlicGRob3ZnY2JlbmtjbmF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk5OTcwNSwiZXhwIjoyMDg3NTc1NzA1fQ.nUr9s0h8noHP6MxZujQS6MG2lcGfK5GyNe1iL5vuCB8';

const supabase = createClient(url, key);

async function checkRpc() {
    console.log("Checking if 'run_sql' RPC exists...");
    const { data, error } = await supabase.rpc('run_sql', { sql: 'SELECT 1' });
    if (error) {
        console.log("'run_sql' check failed or doesn't exist:", error.message);
    } else {
        console.log("'run_sql' RPC exists!");
    }
}

checkRpc();
