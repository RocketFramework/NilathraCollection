-- Add agreed_price to daily_activities table
ALTER TABLE daily_activities 
ADD COLUMN agreed_price NUMERIC(15, 2);
