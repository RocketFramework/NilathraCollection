-- Migration: Add Hotel Child Policy Columns
ALTER TABLE hotels 
ADD COLUMN IF NOT EXISTS child_free_until_age INTEGER DEFAULT 6,
ADD COLUMN IF NOT EXISTS child_half_price_until_age INTEGER DEFAULT 12,
ADD COLUMN IF NOT EXISTS child_half_price_percentage INTEGER DEFAULT 50,
ADD COLUMN IF NOT EXISTS child_policy_notes TEXT;

-- Update existing records with defaults if needed (though DEFAULT clause handles NEW inserts)
UPDATE hotels SET 
  child_free_until_age = 6,
  child_half_price_until_age = 12,
  child_half_price_percentage = 50
WHERE child_free_until_age IS NULL;
