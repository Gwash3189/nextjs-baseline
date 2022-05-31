import React from 'react'

import { MarketingContainer } from 'components/marketing/MarketingContainer'
import { MarketingHeader } from 'components/marketing/MarketingHeader'

export default function Main () {
  return (
    <MarketingContainer>
      <MarketingHeader />
      <div className="h-screen flex items-center">
        <section className='w-screen md:w-9/12 xl:w-8/12'>
          <span className="font-bold uppercase tracking-widest">Rapidly build modern sass</span>
          <h1 className="leading-none uppercase text-5xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-purple-400">
              Birds<br/>Nest
          </h1>
          <p className="font-bold mb-1">The building blocks of your next sass</p>
          <p>A utility-first CLI toolchain packed with services such as </p><code className='font-mono font-medium text-purple-500'>permissions</code>,<code className='font-mono font-medium text-purple-500'> health</code> and <code className='font-mono font-medium text-purple-500'>feature flags</code>
          <p>that can be composed to build modern, scalable, reliable sass businesses.</p>
          <p>All from your console.</p>
        </section>
      </div>
    </MarketingContainer>
  )
}
