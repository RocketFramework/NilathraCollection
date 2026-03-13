const { createClient } = require('@supabase/supabase-js');
const url = 'https://vknibpdhovgcbenkcnaz.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbmlicGRob3ZnY2JlbmtjbmF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk5OTcwNSwiZXhwIjoyMDg3NTc1NzA1fQ.nUr9s0h8noHP6MxZujQS6MG2lcGfK5GyNe1iL5vuCB8';

const supabase = createClient(url, key);

const updates = [
    { id: 51, images: ['/images/activities/national_railway_museum_colombo_1_1773408673824.png', '/images/activities/national_railway_museum_colombo_2_1773408695510.png', '/images/activities/national_railway_museum_colombo_3_1773408715322.png'] },
    { id: 52, images: ['/images/activities/gangaramaya_temple_colombo_1_1773408737424.png', '/images/activities/gangaramaya_temple_colombo_2_1773408757469.png', '/images/activities/gangaramaya_temple_colombo_3_1773408778395.png'] },
    { id: 53, images: ['/images/activities/pooja_hindu_temple_colombo_1_1773408802605.png', '/images/activities/pooja_hindu_temple_colombo_2_1773408822752.png', '/images/activities/pooja_hindu_temple_colombo_3_1773408840750.png'] },
    { id: 54, images: ['/images/activities/pooja_hindu_temple_matale_1_1773408862676.png', '/images/activities/pooja_hindu_temple_matale_2_1773408887247.png', '/images/activities/pooja_hindu_temple_matale_3_1773408906201.png'] }
];

async function run() {
    for (const update of updates) {
        console.log(`Updating ID ${update.id}...`);
        const { error } = await supabase.from('activities').update({ images: update.images }).eq('id', update.id);
        if (error) console.error(`Error on ${update.id}:`, error);
    }
    console.log('Done 51-54.');
}
run();
