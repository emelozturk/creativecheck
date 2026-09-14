import { createClient } from '@supabase/supabase-js'

// Vercel's Vite build currently does not have the VITE_* variables injected.
// Keep the public Supabase configuration available as a safe fallback so the
// application cannot fail at startup when those build-time variables are absent.
// The key is a publishable/anon key; no service-role secret belongs in client code.
const DEFAULT_SUPABASE_URL = 'https://gnqrakuhmzchwherombt.supabase.co'
const DEFAULT_SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_-sTc8wYEmrNKb-gtHc_qHA_cxq9M5lS'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL
const supabasePublishableKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  DEFAULT_SUPABASE_PUBLISHABLE_KEY

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
)
