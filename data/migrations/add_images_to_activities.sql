-- Add images column to activities table
ALTER TABLE activities ADD COLUMN IF NOT EXISTS images text[];

-- Update Hot Air Ballooning activity with the new images
UPDATE activities 
SET images = ARRAY[
    '/images/activities/hot_air_ballooning_1.png',
    '/images/activities/hot_air_ballooning_2.png',
    '/images/activities/hot_air_ballooning_3.png'
]
WHERE id = 1;

-- Verification query
SELECT id, activity_name, images FROM activities WHERE id = 1;
