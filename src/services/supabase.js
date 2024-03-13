import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nqvbosbucsihebbfadzg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xdmJvc2J1Y3NpaGViYmZhZHpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNDI5ODgsImV4cCI6MjAyNTkxODk4OH0.6Ht_9EZx4mD0Pajzlj2A36JqetOb1PBOEPi8za3SAO8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
