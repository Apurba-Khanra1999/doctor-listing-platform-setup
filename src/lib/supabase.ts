
import { createClient } from '@supabase/supabase-js';
import type { Doctor } from '@/types/doctor';

const supabaseUrl = 'https://pcinzhguvmygmhlamprm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjaW56aGd1dm15Z21obGFtcHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4OTI4MDAsImV4cCI6MjA1MDQ2ODgwMH0.VJBYxKQzOaQzQQQzQQQzQQQzQQQzQQQzQQQzQQQzQQQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Database {
  public: {
    Tables: {
      doctors: {
        Row: Doctor;
        Insert: Omit<Doctor, 'id' | 'created_at' | 'average_rating' | 'total_reviews' | 'profile_views'>;
        Update: Partial<Omit<Doctor, 'id' | 'created_at'>>;
      };
    };
  };
}