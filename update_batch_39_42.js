const { createClient } = require('@supabase/supabase-js');
const url = 'https://vknibpdhovgcbenkcnaz.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbmlicGRob3ZnY2JlbmtjbmF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk5OTcwNSwiZXhwIjoyMDg3NTc1NzA1fQ.nUr9s0h8noHP6MxZujQS6MG2lcGfK5GyNe1iL5vuCB8';

const supabase = createClient(url, key);

const updates = [
    { id: 39, images: ['/images/activities/dambulla_cave_temple_1_1773405707701.png', '/images/activities/dambulla_cave_temple_2_1773405732471.png', '/images/activities/dambulla_cave_temple_3_1773405751645.png'] },
    { id: 40, images: ['/images/activities/ancient_polonnaruwa_1_1773405769674.png', '/images/activities/ancient_polonnaruwa_2_1773405793609.png', '/images/activities/ancient_polonnaruwa_3_1773405816295.png'] },
    { id: 41, images: ['/images/activities/ancient_anuradhapura_1_1773405834719.png', '/images/activities/ancient_anuradhapura_2_1773405855393.png', '/images/activities/ancient_anuradhapura_3_1773405874255.png'] },
    { id: 42, images: ['/images/activities/wandering_galle_fort_1_1773405892081.png', '/images/activities/wandering_galle_fort_2_1773405910086.png', '/images/activities/wandering_galle_fort_3_1773405928148.png'] }
];

async function run() {
    for (const update of updates) {
        console.log(`Updating ID ${update.id}...`);
        const { error } = await supabase.from('activities').update({ images: update.images }).eq('id', update.id);
        if (error) console.error(`Error on ${update.id}:`, error);
    }
    console.log('Done 39-42.');
}
run();
