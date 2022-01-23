import Link from 'next/link'
import React from 'react'

export default function FiveHundred () {
  return (
    <div
      className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
    from-indigo-500
  "
    >
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-9xl">500</h1>
          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-500">Oops!</span> Something went wrong.
          </h6>

          <p className="text-center text-gray-500 md:text-lg">
            {'We encountered an error, and we\'re able to handle it.'}
          </p>
          <p className="mb-8 text-center text-gray-500 md:text-lg">
            {'We\'re aware of it - we\'ll fix it soon.'}
          </p>

          <Link
            href="/"
          ><a className="px-6 py-2 font-semibold underline text-blue-800">Go home</a></Link
          >
        </div>
      </div>
    </div>
  )
}
