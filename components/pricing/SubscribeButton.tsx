import React from 'react'
import CTAButton from 'components/buttons/CTAButton'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/solid'

export default function SubscribeButton () {
  return (
    <Link href='/login'>
      <CTAButton className='mt-6 w-10/12'>
        <span>
          <a>
            <span className='inline'>Start Trial</span> <ArrowRightIcon className='w-4 inline' />
          </a>
        </span>
      </CTAButton>
    </Link>
  )
}
