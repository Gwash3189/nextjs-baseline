import Link from 'next/link'
import React from 'react'
import NavButton from '../buttons/NavButton'
import CTAButton from 'components/buttons/CTAButton'

function isActive (name: string, props: { active?: string }) {
  return props.active === name
}

export function MarketingHeader (props: { active?: string }) {
  return (
    <header className='w-full pt-6 flex flex-row'>
      <div className='flex grow flex-col text-transparent hover:text-gray-300'>
        <Link href='/'>
          <a>
            <h1 className='text-6xl font-bold -ml-6 text-black'>🦩</h1>
            <span className='transition-all opacity-30'>Yeah yeah yeah</span>
          </a>
        </Link>
      </div>
      <div className='flex-none flex justify-center items-center'>
        <NavButton href='/404' active={isActive('docs', props)}>
            Docs
        </NavButton>
        <NavButton href='/pricing' active={isActive('pricing', props)}>
            Pricing
        </NavButton>
        <Link href='/login'>
          <a tabIndex={-1}>
            <CTAButton className='w-20'>
                Login
            </CTAButton>
          </a>
        </Link>

      </div>
    </header>
  )
}
