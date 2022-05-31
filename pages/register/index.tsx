import Link from 'next/link'
import React from 'react'
import CTAButton from 'components/buttons/CTAButton'

export default function Login () {
  return (
    <div>
      <nav className='bg-white py-5 drop-shadow-lg'>
        <div className='text-center'>
          <h1 className='mx-auto h-12 w-auto text-2xl font-bold inline absolute rotate-45 pr-12'>🦩</h1>
          <Link href='/'>
            <a>
              <h1 className='mx-auto h-12 w-auto text-4xl font-bold inline uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-purple-400'>Birds Nest</h1>
            </a>
          </Link>
        </div>
      </nav>
      <div className='bg-gradient-to-br from-white to-sky-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-center '>
          <div className='max-w-md w-full space-y-8'>
            <div>
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
            <form action='/api/auth/register' method='POST'>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                  Name
                </label>
                <input required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Name' name='name'/>
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                  Email
                </label>
                <input required minLength={2} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Email' name='email'/>
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                  Password
                </label>
                <input required minLength={2} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Email' name='email'/>
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                  Confirm Password
                </label>
                <input required minLength={2} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Email' name='email'/>
              </div>
              <div>
                <CTAButton
                  type='submit'
                  className='group relative w-full flex justify-center ml-0'
                >
                  Register
                </CTAButton>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
