import { getClient } from 'domains/supabase'

const supabase = getClient()

export const getCurrentUser = (req?: any) => {
  if (window) {
    return supabase.auth.user()
  } else {
    supabase.auth.api.getUserByCookie(req)
  }
}
