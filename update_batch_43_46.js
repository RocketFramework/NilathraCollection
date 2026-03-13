const { createClient } = require('@supabase/supabase-js');
const url = 'https://vknibpdhovgcbenkcnaz.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbmlicGRob3ZnY2JlbmtjbmF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk5OTcwNSwiZXhwIjoyMDg3NTc1NzA1fQ.nUr9s0h8noHP6MxZujQS6MG2lcGfK5GyNe1iL5vuCB8';

const supabase = createClient(url, key);

const updates = [
    { id: 43, images: ['/images/activities/jami_ul_alfar_mosque_1_1773407106325.png', '/images/activities/jami_ul_alfar_mosque_2_1773407131311.png', '/images/activities/jami_ul_alfar_mosque_3_1773407154017.png'] },
    { id: 44, images: ['/images/activities/national_museum_colombo_1_1773407175356.png', '/images/activities/national_museum_colombo_2_1773407197648.png', '/images/activities/national_museum_colombo_3_1773407218468.png'] },
    { id: 45, images: ['/images/activities/esala_perahera_kandy_1_1773407237499.png', '/images/activities/esala_perahera_kandy_2_1773407256260.png', '/images/activities/esala_perahera_kandy_3_1773407275075.png'] },
    { id: 46, images: ['/images/activities/jaffna_fort_1_1773407291028.png', '/images/activities/jaffna_fort_2_1773407310276.png', '/images/activities/jaffna_fort_3_1773407329155.png'] }
];

async function run() {
    for (const update of updates) {
        console.log(`Updating ID ${update.id}...`);
        const { error } = await supabase.from('activities').update({ images: update.images }).eq('id', update.id);
        if (error) console.error(`Error on ${update.id}:`, error);
    }
    console.log('Done 43-46.');
}
run();
