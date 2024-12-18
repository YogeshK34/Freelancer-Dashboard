import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zabsnfsgvwbunevofvju.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphYnNuZnNndndidW5ldm9mdmp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1NDQyMzcsImV4cCI6MjA1MDEyMDIzN30.snissXODr0Ia93V9RjV7vl2c6DIiLreP44aH-dcUc_Y'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


