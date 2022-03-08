import { Session, User } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import { getClient } from 'domains/supabase'

export function useCurrentUser () {
  const supabase = getClient()
  const [session, setSession] = useState<null | Session>(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return { user: session?.user, session}
}
