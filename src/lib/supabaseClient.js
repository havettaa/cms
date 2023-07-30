import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://mairwwaflnkqcrmfdljk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1haXJ3d2FmbG5rcWNybWZkbGprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzOTU5MjcsImV4cCI6MjAwNDk3MTkyN30.95n-XNJ5Qw8fCmts1FEou-qftupjr9zD0Dg-DWO26I0')