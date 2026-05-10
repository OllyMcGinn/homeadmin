import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nomdzhbyxfieluelvwzi.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vbWR6aGJ5eGZpZWx1ZWx2d3ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2MDQwMDgsImV4cCI6MjA5MzE4MDAwOH0.VIKpUvEQqYWEQ8EFe2TO-KctqjfTjDdamIPn_C0wysM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
