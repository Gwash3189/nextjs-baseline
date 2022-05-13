import React from 'react'

export function MarketingContainer (props: { children: JSX.Element | JSX.Element[]}) {
  return (
    <div className='text-purple-900 px-6 lg:px-36 bg-gradient-to-b from-white to-sky-50'>
      <div>
        {props.children}
      </div>
      <footer className='flex flex-row-reverse pb-6'>
        <div>
          <p>Yours Truely</p>
          <p className="font-bold text-pink-500">Big Bird Tech Inc.</p>
        </div>
      </footer>
    </div>
  )
}
