-- Migration: Add operational tracking fields to Purchase Orders

ALTER TABLE purchase_orders 
ADD COLUMN IF NOT EXISTS sent_email VARCHAR(255),
ADD COLUMN IF NOT EXISTS sent_to_name VARCHAR(255),
ADD COLUMN IF NOT EXISTS sent_date TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS accepted_by_name VARCHAR(255),
ADD COLUMN IF NOT EXISTS accepted_date TIMESTAMP WITH TIME ZONE;
