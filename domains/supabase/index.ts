import { createClient, SupabaseClient } from '@supabase/supabase-js'

let client: SupabaseClient | null = null

export const getClient = () => {
  if (client) {
    return client
  }

  client = createClient('https://fjuqfziymhiazathmcvm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyNDk5MDQyLCJleHAiOjE5NTgwNzUwNDJ9.4XbwazKuyVwKQh7P75jv5-MAMGinz87M-VCc0Xvsljc')
  return client
}
