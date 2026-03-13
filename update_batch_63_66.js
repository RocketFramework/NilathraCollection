const { createClient } = require('@supabase/supabase-js');
const url = 'https://vknibpdhovgcbenkcnaz.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbmlicGRob3ZnY2JlbmtjbmF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk5OTcwNSwiZXhwIjoyMDg3NTc1NzA1fQ.nUr9s0h8noHP6MxZujQS6MG2lcGfK5GyNe1iL5vuCB8';

const supabase = createClient(url, key);

const updates = [
    { id: 63, images: ['/images/activities/seafood_beach_mirissa_1_1773411473110.png', '/images/activities/seafood_beach_mirissa_2_1773411492799.png', '/images/activities/seafood_beach_mirissa_3_1773411513668.png'] },
    { id: 64, images: ['/images/activities/seafood_beach_negombo_1_1773411533643.png', '/images/activities/seafood_beach_negombo_2_1773411559047.png', '/images/activities/seafood_beach_negombo_3_1773411582104.png'] },
    { id: 65, images: ['/images/activities/seafood_beach_unawatuna_1_1773411607791.png', '/images/activities/seafood_beach_unawatuna_2_1773411627527.png', '/images/activities/seafood_beach_unawatuna_3_1773411649444.png'] },
    { id: 66, images: ['/images/activities/tea_tasting_nuwara_eliya_1_1773411673793.png', '/images/activities/tea_tasting_nuwara_eliya_2_1773411695544.png', '/images/activities/tea_tasting_nuwara_eliya_3_1773411715590.png'] }
];

async function run() {
    for (const update of updates) {
        console.log(`Updating ID ${update.id}...`);
        const { error } = await supabase.from('activities').update({ images: update.images }).eq('id', update.id);
        if (error) console.error(`Error on ${update.id}:`, error);
    }
    console.log('Done 63-66.');
}
run();
