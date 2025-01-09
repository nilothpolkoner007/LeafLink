import { createClient } from '@supabase/supabase-js';
const supabaseUrl = ' https://zebmboklcfcruuvxqqap.supabase.co';

const supabaseAnonKey = 'Soumi_is_a_good_g';


export const supabase = createClient(supabaseUrl, supabaseAnonKey);