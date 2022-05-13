import classNames from 'classnames/dedupe'
import { get } from 'domains/remote'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Login () {
  const { query, push } = useRouter()
  const [error, setError] = useState('')

  useEffect(() => {
    if (query.otp) {
      get(`/api/auth/verify?otp=${query.otp}`)
        .then(async () => push('/app'))
        .catch((x) => {
          // debugger
          setError('Something went wrong verifying your account')
        })
    }
  }, [query])

  const text = !error ? 'Verifying your email...' : error
  const textClasses = classNames(
    'mt-6 text-center text-3xl font-extrabold',
    error ? 'text-red-800' : 'text-gray-900',
    error ? '' : 'animate-pulse'
  )

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <div className='text-center'>
            <h1 className='mx-auto h-12 w-auto text-6xl font-bold'>🦩</h1>
          </div>
          <h2 className={textClasses}>{text}</h2>
        </div>
      </div>
    </div>
  )
}
