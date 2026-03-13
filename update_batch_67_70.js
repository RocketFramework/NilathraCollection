const { createClient } = require('@supabase/supabase-js');
const url = 'https://vknibpdhovgcbenkcnaz.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbmlicGRob3ZnY2JlbmtjbmF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk5OTcwNSwiZXhwIjoyMDg3NTc1NzA1fQ.nUr9s0h8noHP6MxZujQS6MG2lcGfK5GyNe1iL5vuCB8';

const supabase = createClient(url, key);

const updates = [
    { id: 67, images: ['/images/activities/tea_tasting_ella_1_1773411933407.png', '/images/activities/tea_tasting_ella_2_1773411955663.png', '/images/activities/tea_tasting_ella_3_1773411976997.png'] },
    { id: 68, images: ['/images/activities/craft_beer_colombo_1_1773411997627.png', '/images/activities/craft_beer_colombo_2_1773412017991.png', '/images/activities/craft_beer_colombo_3_1773412040173.png'] },
    { id: 69, images: ['/images/activities/craft_beer_negombo_1_1773412058241.png', '/images/activities/craft_beer_negombo_2_1773412075626.png', '/images/activities/craft_beer_negombo_3_1773412095909.png'] },
    { id: 70, images: ['/images/activities/local_eatery_kandy_1_1773412113474.png', '/images/activities/local_eatery_kandy_2_1773412129805.png', '/images/activities/local_eatery_kandy_3_1773412148250.png'] }
];

async function run() {
    for (const update of updates) {
        console.log(`Updating ID ${update.id}...`);
        const { error } = await supabase.from('activities').update({ images: update.images }).eq('id', update.id);
        if (error) console.error(`Error on ${update.id}:`, error);
    }
    console.log('Done 67-70.');
}
run();
