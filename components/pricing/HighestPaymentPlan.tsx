import React from 'react'
import AvailableFeature from './AvailableFeature'
import SubscribeButton from './SubscribeButton'

export default function HighlightedPaymentPlan () {
  return (
    <section className='bg-white shadow-xl h-auto mx-10 px-6 py-6 min-w-[384px] max-w-[384px]'>
      <p className="text-5xl font-bold text-pink-500">
        <span className='text-sm'>USD$</span> 100
      </p>
      <div className='border-b-2 pb-4 mb-4'>
        <p className="text-md uppercase text-pink-500 pt-2">
            Per user, per month.
        </p>
        <p className="text-md uppercase text-pink-500">
            Minimum 100 users
        </p>
      </div>
      <p className="text-2xl font-bold text-pink-500 pb-4">
          Enterprise Plan
      </p>
      <p className="text-xl pb-4">
          For organisations that need web-scale and top of the line support.
      </p>
      <section>
        <p className="uppercase text-lg pb-4 text-purple-500">
            Inclusions
        </p>
        <div className='flex flex-col space-y-2'>
          <AvailableFeature>
            6 workspaces
          </AvailableFeature>
          <AvailableFeature>
            Public health statuses
          </AvailableFeature>
          <AvailableFeature>
            Private health statuses
          </AvailableFeature>
          <AvailableFeature>
            Unlimited permissions
          </AvailableFeature>
          <AvailableFeature>
            Unlimited feature flags
          </AvailableFeature>
          <AvailableFeature>
            Unlimited health checks
          </AvailableFeature>
          <AvailableFeature>
            Free 14 day trial
          </AvailableFeature>
          <AvailableFeature>
            Audit Logging
          </AvailableFeature>
          <AvailableFeature>
            Access control
          </AvailableFeature>
          <AvailableFeature>
            Invoice Payment
          </AvailableFeature>
          <AvailableFeature>
            SLA
          </AvailableFeature>
          <AvailableFeature>
            Email Support
          </AvailableFeature>
          <AvailableFeature>
            Live Chat Support
          </AvailableFeature>
          <AvailableFeature>
            10 hours contracted per month
          </AvailableFeature>
        </div>
      </section>
      <SubscribeButton />
    </section>
  )
}
