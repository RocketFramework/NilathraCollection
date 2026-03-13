const { createClient } = require('@supabase/supabase-js');
const url = 'https://vknibpdhovgcbenkcnaz.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbmlicGRob3ZnY2JlbmtjbmF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk5OTcwNSwiZXhwIjoyMDg3NTc1NzA1fQ.nUr9s0h8noHP6MxZujQS6MG2lcGfK5GyNe1iL5vuCB8';

const supabase = createClient(url, key);

const updates = [
    { id: 35, images: ['/images/activities/casino_marina_colombo_1_1773404867823.png', '/images/activities/casino_marina_colombo_2_1773404886749.png', '/images/activities/casino_marina_colombo_3_1773404910737.png'] },
    { id: 36, images: ['/images/activities/casino_stardust_colombo_1_1773404929212.png', '/images/activities/casino_stardust_colombo_2_1773404954043.png', '/images/activities/casino_stardust_colombo_3_1773404971589.png'] },
    { id: 37, images: ['/images/activities/climbing_sigiriya_rock_1_1773404987361.png', '/images/activities/climbing_sigiriya_rock_2_1773405019427.png', '/images/activities/climbing_sigiriya_rock_3_1773405038300.png'] },
    { id: 38, images: ['/images/activities/temple_of_the_tooth_kandy_1_1773405060043.png', '/images/activities/temple_of_the_tooth_kandy_2_1773405078394.png', '/images/activities/temple_of_the_tooth_kandy_3_1773405094630.png'] }
];

async function run() {
    for (const update of updates) {
        console.log(`Updating ID ${update.id}...`);
        const { error } = await supabase.from('activities').update({ images: update.images }).eq('id', update.id);
        if (error) console.error(`Error on ${update.id}:`, error);
    }
    console.log('Done 35-38.');
}
run();
