const { createClient } = require('@supabase/supabase-js');
const url = 'https://vknibpdhovgcbenkcnaz.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbmlicGRob3ZnY2JlbmtjbmF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk5OTcwNSwiZXhwIjoyMDg3NTc1NzA1fQ.nUr9s0h8noHP6MxZujQS6MG2lcGfK5GyNe1iL5vuCB8';

const supabase = createClient(url, key);

const updates = [
    { id: 47, images: ['/images/activities/nallur_kandaswamy_kovil_1_1773407871577.png', '/images/activities/nallur_kandaswamy_kovil_2_1773407900213.png', '/images/activities/nallur_kandaswamy_kovil_3_1773407928170.png'] },
    { id: 48, images: ['/images/activities/jaffna_public_library_1_1773407958284.png', '/images/activities/jaffna_public_library_2_1773407978014.png', '/images/activities/jaffna_public_library_3_1773408002486.png'] },
    { id: 49, images: ['/images/activities/koneswaram_temple_1_1773408021060.png', '/images/activities/koneswaram_temple_2_1773408041757.png', '/images/activities/koneswaram_temple_3_1773408063319.png'] },
    { id: 50, images: ['/images/activities/dutch_reformed_church_galle_1_1773408083072.png', '/images/activities/dutch_reformed_church_galle_2_1773408103221.png', '/images/activities/dutch_reformed_church_galle_3_1773408124472.png'] }
];

async function run() {
    for (const update of updates) {
        console.log(`Updating ID ${update.id}...`);
        const { error } = await supabase.from('activities').update({ images: update.images }).eq('id', update.id);
        if (error) console.error(`Error on ${update.id}:`, error);
    }
    console.log('Done 47-50.');
}
run();
