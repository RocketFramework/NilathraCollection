const { createClient } = require('@supabase/supabase-js');
const url = 'https://vknibpdhovgcbenkcnaz.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbmlicGRob3ZnY2JlbmtjbmF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk5OTcwNSwiZXhwIjoyMDg3NTc1NzA1fQ.nUr9s0h8noHP6MxZujQS6MG2lcGfK5GyNe1iL5vuCB8';

const supabase = createClient(url, key);

async function check() {
    console.log("Checking Drivers...");
    const { data: drivers, error: dError } = await supabase.from('drivers').select('id, first_name');
    if (dError) console.error("Drivers Error:", dError);
    else console.log("Drivers Count:", drivers.length, drivers);

    console.log("Checking Tour Guides...");
    const { data: guides, error: gError } = await supabase.from('tour_guides').select('id, first_name');
    if (gError) console.error("Guides Error:", gError);
    else console.log("Guides Count:", guides.length, guides);
}

check();
