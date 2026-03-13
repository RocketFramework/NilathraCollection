const { createClient } = require('@supabase/supabase-js');
const url = 'https://vknibpdhovgcbenkcnaz.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbmlicGRob3ZnY2JlbmtjbmF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk5OTcwNSwiZXhwIjoyMDg3NTc1NzA1fQ.nUr9s0h8noHP6MxZujQS6MG2lcGfK5GyNe1iL5vuCB8';

const supabase = createClient(url, key);

const updates = [
    { id: 55, images: ['/images/activities/seetha_amman_temple_nuwara_eliya_1_1773409282808.png', '/images/activities/seetha_amman_temple_nuwara_eliya_2_1773409300821.png', '/images/activities/seetha_amman_temple_nuwara_eliya_3_1773409320698.png'] },
    { id: 56, images: ['/images/activities/gal_vihara_polonnaruwa_1_1773409344803.png', '/images/activities/gal_vihara_polonnaruwa_2_1773409365882.png', '/images/activities/gal_vihara_polonnaruwa_3_1773409407522.png'] },
    { id: 57, images: ['/images/activities/fort_frederick_trincomalee_1_1773409464001.png', '/images/activities/fort_frederick_trincomalee_2_1773409482447.png', '/images/activities/fort_frederick_trincomalee_3_1773409505003.png'] },
    { id: 58, images: ['/images/activities/street_food_tour_colombo_1_1773409531291.png', '/images/activities/street_food_tour_colombo_2_1773409558526.png', '/images/activities/street_food_tour_colombo_3_1773409582557.png'] }
];

async function run() {
    for (const update of updates) {
        console.log(`Updating ID ${update.id}...`);
        const { error } = await supabase.from('activities').update({ images: update.images }).eq('id', update.id);
        if (error) console.error(`Error on ${update.id}:`, error);
    }
    console.log('Done 55-58.');
}
run();
