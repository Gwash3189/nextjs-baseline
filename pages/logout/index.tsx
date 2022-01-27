import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/router'
import React from 'react'

const supabase = createClient('https://fjuqfziymhiazathmcvm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyNDk5MDQyLCJleHAiOjE5NTgwNzUwNDJ9.4XbwazKuyVwKQh7P75jv5-MAMGinz87M-VCc0Xvsljc')

function signout (router: any) {
  router.push('/')
  return supabase.auth.signOut()
}

export default function Logout () {
  const router = useRouter()

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full'>
        <button
          onClick={() => signout(router)}
          className="group relative w-full py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
                    Logout
        </button>
      </div>
    </div>
  )
}
