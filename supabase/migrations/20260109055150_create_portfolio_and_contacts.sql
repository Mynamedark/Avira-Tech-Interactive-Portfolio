BEGIN;

-- Create contacts table
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL
);

-- Create portfolio_items table
CREATE TABLE IF NOT EXISTS public.portfolio_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    tags TEXT[],
    link TEXT
);

-- Enable RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;

-- Policies for contacts (Insert only for public)
CREATE POLICY "Enable insert for everyone" ON public.contacts
    FOR INSERT WITH CHECK (true);

-- Policies for portfolio_items (Read only for public)
CREATE POLICY "Enable read access for all users" ON public.portfolio_items
    FOR SELECT USING (true);

COMMIT;