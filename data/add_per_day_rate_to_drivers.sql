ALTER TABLE drivers ADD COLUMN per_day_rate DECIMAL(10, 2) DEFAULT 15.00;
-- Update existing drivers to have the default rate
UPDATE drivers SET per_day_rate = 15.00 WHERE per_day_rate IS NULL;

-- Fix RLS: Allow authenticated users (agents/admins) to read drivers and guides
CREATE POLICY public_read_drivers ON drivers FOR SELECT TO authenticated USING (true);
CREATE POLICY public_read_guides ON tour_guides FOR SELECT TO authenticated USING (true);
