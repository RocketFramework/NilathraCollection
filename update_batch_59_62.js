const { createClient } = require('@supabase/supabase-js');
const url = 'https://vknibpdhovgcbenkcnaz.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbmlicGRob3ZnY2JlbmtjbmF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk5OTcwNSwiZXhwIjoyMDg3NTc1NzA1fQ.nUr9s0h8noHP6MxZujQS6MG2lcGfK5GyNe1iL5vuCB8';

const supabase = createClient(url, key);

const updates = [
    { id: 59, images: ['/images/activities/street_food_tour_kandy_1_1773410425585.png', '/images/activities/street_food_tour_kandy_2_1773410446393.png', '/images/activities/street_food_tour_kandy_3_1773410466647.png'] },
    { id: 60, images: ['/images/activities/cooking_class_colombo_1_1773410486156.png', '/images/activities/cooking_class_colombo_2_1773410505676.png', '/images/activities/cooking_class_colombo_3_1773410525827.png'] },
    { id: 61, images: ['/images/activities/cooking_class_galle_1_1773410543322.png', '/images/activities/cooking_class_galle_2_1773410568848.png', '/images/activities/cooking_class_galle_3_1773410583400.png'] },
    { id: 62, images: ['/images/activities/high_tea_grand_hotel_1_1773410609271.png', '/images/activities/high_tea_grand_hotel_2_1773410628219.png', '/images/activities/high_tea_grand_hotel_3_1773410648849.png'] }
];

async function run() {
    for (const update of updates) {
        console.log(`Updating ID ${update.id}...`);
        const { error } = await supabase.from('activities').update({ images: update.images }).eq('id', update.id);
        if (error) console.error(`Error on ${update.id}:`, error);
    }
    console.log('Done 59-62.');
}
run();
