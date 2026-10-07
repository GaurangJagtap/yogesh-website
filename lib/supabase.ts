import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://itveidwmwryrearspxdp.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  "sb_publishable_iF-ch3NQyHXlHL8LmmF8pA_N2BWO3ZC";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
