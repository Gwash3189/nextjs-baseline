import { MarketingContainer } from 'components/MarketingContainer'
import Link from 'next/link'
import React from 'react'

export default function FourOhFour () {
  return (
    <MarketingContainer>
      <div className='h-screen flex justify-center items-center'>
        <div className="px-40 py-20 bg-white rounded-md shadow-xl">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-9xl">404</h1>
            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-pink-500">Oops!</span> Page not found
            </h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">
          The page you’re looking for doesn’t exist.
            </p>

            <Link
              href="/"
            ><a className="px-6 py-2 font-semibold underline text-blue-800">Go home</a></Link
            >
          </div>
        </div>
      </div>

    </MarketingContainer>
    
  )
}
