import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xcsldrezawbthhwyqwff.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhjc2xkcmV6YXdidGhod3lxd2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3Nzc0MTEsImV4cCI6MjA2OTM1MzQxMX0.k4YBWWaLDv40qr-x_UygvkuxnW_4_J0TjAX0VgZMPW4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 