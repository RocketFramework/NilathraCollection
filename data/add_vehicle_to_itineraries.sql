ALTER TABLE daily_activities ADD COLUMN vehicle_id UUID REFERENCES transport_vehicles(id);
