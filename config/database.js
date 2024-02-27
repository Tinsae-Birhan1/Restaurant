
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://mzdjukonpniqelgtcanp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16ZGp1a29ucG5pcWVsZ3RjYW5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwMTE4NDgsImV4cCI6MjAyNDU4Nzg0OH0.Bs9-DTp1aoH0Y3vkyGyZ-R8qX2MeaSTRhwrxYUOuhww';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };
