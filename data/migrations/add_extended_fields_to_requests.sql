-- Migration to add extended fields to the requests table for better lead capture
ALTER TABLE requests 
ADD COLUMN IF NOT EXISTS departure_country TEXT,
ADD COLUMN IF NOT EXISTS budget NUMERIC,
ADD COLUMN IF NOT EXISTS start_date DATE,
ADD COLUMN IF NOT EXISTS duration_nights INTEGER,
ADD COLUMN IF NOT EXISTS adults INTEGER DEFAULT 2,
ADD COLUMN IF NOT EXISTS children INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS infants INTEGER DEFAULT 0;

-- Comment on columns for clarity
COMMENT ON COLUMN requests.departure_country IS 'The country the requester is departing from';
COMMENT ON COLUMN requests.budget IS 'The estimated budget for the trip';
COMMENT ON COLUMN requests.start_date IS 'The planned start date for the trip';
COMMENT ON COLUMN requests.duration_nights IS 'The planned duration of the trip in nights';
COMMENT ON COLUMN requests.adults IS 'Number of adults in the party';
COMMENT ON COLUMN requests.children IS 'Number of children in the party';
COMMENT ON COLUMN requests.infants IS 'Number of infants in the party';
