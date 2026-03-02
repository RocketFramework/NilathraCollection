-- Add restaurant_id to daily_activities to support itinerary binding
ALTER TABLE public.daily_activities 
ADD COLUMN IF NOT EXISTS restaurant_id UUID REFERENCES public.restaurants(id);

-- Optional: Add index for performance on itinerary searches
CREATE INDEX IF NOT EXISTS idx_daily_activities_restaurant_id ON public.daily_activities(restaurant_id);
