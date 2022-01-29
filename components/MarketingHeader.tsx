import Link from 'next/link'
import React from 'react'
import NavButton from './buttons/NavButton'
import CTAButton from 'components/buttons/CTAButton'

export function MarketingHeader (props: { active?: string }) {
    return (
        <header className='w-full pt-6 flex flex-row'>
          <div className='flex grow flex-col text-transparent hover:text-gray-300'>
            <Link href='/'>
              <a className=''>
                <h1 className='text-6xl font-bold -ml-6 text-black'>🦩</h1>
                <span className='transition-all opacity-30'>Yeah yeah yeah</span>
              </a>
            </Link>
          </div>
          <div className='flex-none flex justify-center items-center'>
            <NavButton href='/404' active={props.active === 'docs'}>
              Docs
            </NavButton>
            <NavButton href='/pricing' active={props.active === 'pricing'}>
              Pricing
            </NavButton>
            <CTAButton>
              Login
            </CTAButton>
          </div>
      </header>
    )
}