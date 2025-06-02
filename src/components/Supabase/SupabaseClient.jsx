
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nsrzrlbjbbldfmdrnyfh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zcnpybGJqYmJsZGZtZHJueWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4MDU0OTUsImV4cCI6MjA2NDM4MTQ5NX0.6dmK42FcdZyDsLCUfeMTG9wujoaVBOmxVpZG3HNb4gY'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
