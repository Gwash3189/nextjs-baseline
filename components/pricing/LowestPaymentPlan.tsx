import React from 'react'
import AvailableFeature from './AvailableFeature'
import SubscribeButton from './SubscribeButton'
import UnavailableFeature from './UnavailableFeature'

export default function LowestPaymentPlan () {
  return (
    <section className='bg-white shadow-xl h-auto mx-10 px-6 py-6 min-w-[384px] max-w-[384px]'>
      <p className="text-5xl font-bold text-pink-500">
        <span className='text-sm'>USD$</span> 15
      </p>
      <div className='border-b-2 pb-4 mb-4'>
        <p className="text-md uppercase text-pink-500 pt-2">
          Per user, per month.
        </p>
        <p className="text-md uppercase text-pink-500">
          Up to 100 users
        </p>
      </div>
      <p className="text-2xl font-bold text-pink-500 pb-4">
        Teams Plan
      </p>
      <p className="text-xl pb-4">
        For professional teams wanting reliable and secure building blocks.
      </p>
      <section>
        <p className="uppercase text-lg pb-4 text-purple-500">
          Inclusions
        </p>
        <div className='flex flex-col space-y-2'>
          <AvailableFeature>
            2 workspaces
          </AvailableFeature>
          <AvailableFeature>
            Public health statuses
          </AvailableFeature>
          <AvailableFeature>
            Private health statuses
          </AvailableFeature>
          <AvailableFeature>
            15 permissions
          </AvailableFeature>
          <AvailableFeature>
            30 feature flags
          </AvailableFeature>
          <AvailableFeature>
            10 health checks
          </AvailableFeature>
          <AvailableFeature>
            Free 14 day trial
          </AvailableFeature>
          <UnavailableFeature>
            Audit logging
          </UnavailableFeature>
          <UnavailableFeature>
            Access control
          </UnavailableFeature>
          <UnavailableFeature>
            Invoice Payment
          </UnavailableFeature>
          <UnavailableFeature>
            SLA
          </UnavailableFeature>
          <UnavailableFeature>
            Email Support
          </UnavailableFeature>
          <UnavailableFeature>
            Live Chat Support
          </UnavailableFeature>
          <UnavailableFeature>
            10 hours contracted per month
          </UnavailableFeature>
        </div>
      </section>
      <SubscribeButton />
    </section>
  )
}
