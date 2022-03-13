import Link from 'next/link'
import React from 'react'
import CTAButton from 'components/buttons/CTAButton'

function signIn (e: any) {
  e.preventDefault()
}

export default function Login () {
  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <div className='text-center'>
            <h1 className='mx-auto h-12 w-auto text-6xl font-bold'>🦩</h1>
          </div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Register</h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
              Or{' '}
            <Link href='/login'>
              <a className='focus:outline-none focus:ring-pink-700 focus:ring-2 font-medium text-pink-600 hover:text-pink-500'>
                login with an existing email
              </a>
            </Link>
          </p>
        </div>
        <form action='/api/register' method='POST'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Email'/>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
              Name
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Name'/>
          </div>
          <div>
            <CTAButton
              type='submit'
              className='group ml-0 relative w-full flex justify-center'
              onClick={signIn}
            >
              Register
            </CTAButton>
          </div>
        </form>
      </div>
    </div>
  )
}
