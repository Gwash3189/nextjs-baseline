import React from 'react'
import AvailableFeature from './AvailableFeature'
import SubscribeButton from './SubscribeButton'
import UnavailableFeature from './UnavailableFeature'

export default function HighlightedPaymentPlan () {
  return (
    <section className='bg-emerald-500 shadow-xl h-auto mx-10 px-6 py-6 min-w-[384px] max-w-[384px]'>
      <p className="text-5xl font-bold text-white">
        <span className='text-sm'>USD$</span> 30
      </p>
      <div className='border-b-2 pb-4 mb-4'>
        <p className="text-md uppercase text-white pt-2">
        Per user, per month.
        </p>
        <p className="text-md uppercase text-white">
        Up to 300 users
        </p>
      </div>
      <p className="text-2xl font-bold text-white pb-4">
      Small Business Plan
      </p>
      <p className="text-xl pb-4 text-slate-100">
      For small businesses delivering software at scale.
      </p>
      <section>
        <p className="uppercase text-lg pb-4 text-white">
        Inclusions
        </p>
        <div className='flex flex-col space-y-2'>
          <AvailableFeature highlight>
            4 workspaces
          </AvailableFeature>
          <AvailableFeature highlight>
            Public health statuses
          </AvailableFeature>
          <AvailableFeature highlight>
            Private health statuses
          </AvailableFeature>
          <AvailableFeature highlight>
            100 permissions
          </AvailableFeature>
          <AvailableFeature highlight>
            200 feature flags
          </AvailableFeature>
          <AvailableFeature highlight>
            50 health checks
          </AvailableFeature>
          <AvailableFeature highlight>
            Free 14 day trial
          </AvailableFeature>
          <AvailableFeature highlight>
            Audit logging
          </AvailableFeature>
          <AvailableFeature highlight>
            Access control
          </AvailableFeature>
          <AvailableFeature highlight>
            Email Support
          </AvailableFeature>
          <UnavailableFeature highlight>
            Live chat support
          </UnavailableFeature>
          <UnavailableFeature highlight>
            Invoice Payment
          </UnavailableFeature>
          <UnavailableFeature highlight>
            SLA
          </UnavailableFeature>
          <UnavailableFeature highlight>
            10 hours technical contracting per month
          </UnavailableFeature>
        </div>
      </section>
      <SubscribeButton />
    </section>
  )
}
