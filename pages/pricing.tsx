import React from 'react'
import { MarketingContainer } from 'components/MarketingContainer'
import { MarketingHeader } from 'components/MarketingHeader'
import CTAButton from 'components/buttons/CTAButton'
import { ArrowRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function Pricing () {
  return (
    <MarketingContainer>
      <MarketingHeader active='pricing'/>
      <div className="pb-16 mt-16 space-y-4 flex flex-col lg:space-y-0 lg:flex lg:flex-row items-center justify-center">
        <section className='bg-white shadow-xl h-auto mx-10 px-6 py-6 min-w-[384px] max-w-[384px]'>
          <p className="text-5xl font-bold text-pink-500">
            <span className='text-sm'>USD$</span> 15
          </p>
          <div className='border-b-2 pb-4 mb-4'>
            <p className="text-md uppercase text-pink-500 pt-2">
                  Per user, per month.
            </p>
            <p className="text-md uppercase text-pink-500">
                  Up to 200 users
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
              <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>2 workspaces</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>Public health statuses</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>Private health statuses</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>200 permissions</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>200 feature flags</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>300 health checks</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>Free 14 day trial</p>
              </div>
              <div>
                <p className='inline pl-7 text-purple-400 line-through'>Audit logging</p>
              </div>
              <div>
                <p className='inline pl-7 text-purple-400 line-through'>Access control</p>
              </div>
              <div>
                <p className='inline pl-7 text-purple-400 line-through'>Invoice Payment</p>
              </div>
              <div>
                <p className='inline pl-7 text-purple-400 line-through'>SLA</p>
              </div>
              <div>
                <p className='inline pl-7 text-purple-400 line-through'>Email Support</p>
              </div>
              <div>
                <p className='inline pl-7 text-purple-400 line-through'>Live Chat Support</p>
              </div>
              <div>
                <p className='inline pl-7 text-purple-400 line-through'>10 hours contracted per month</p>
              </div>
            </div>
          </section>
          <CTAButton className='mt-6 w-10/12'>
            <span>
              <Link href='/login'>
                <a>
                  <span className='inline'>Start Trial</span> <ArrowRightIcon className='w-4 inline'></ArrowRightIcon>
                </a>
              </Link>
            </span>
          </CTAButton>
        </section>
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
              <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2 text-white'>6 workspaces</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2 text-white'>Public health statuses</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2 text-white'>Private health statuses</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2 text-white'>500 permissions</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2 text-white'>500 feature flags</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2 text-white'>600 health checks</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2 text-white'>Free 14 day trial</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2 text-white'>Audit logging</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2 text-white'>Access control</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2 text-white'>Email Support</p>
              </div>
              <div>
                <p className='inline pl-7 text-slate-300 line-through'>Live chat support</p>
              </div>
              <div>
                <p className='inline pl-7 text-slate-300 line-through'>Invoice Payment</p>
              </div>
              <div>
                <p className='inline pl-7 text-slate-300 line-through'>SLA</p>
              </div>
              <div>
                <p className='inline pl-7 text-slate-300 line-through'>10 hours technical contracting per month</p>
              </div>
            </div>
          </section>
          <CTAButton className='border-none mt-6 w-10/12'>
            <span>
              <Link href='/login'>
                <a>
                  <span className='inline'>Start Trial</span> <ArrowRightIcon className='w-4 inline'></ArrowRightIcon>
                </a>
              </Link>
            </span>
          </CTAButton>
        </section>
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
              <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>2 workspaces</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>Public health statuses</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>Private health statuses</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>200 permissions</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>200 feature flags</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>300 health checks</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>Free 14 day trial</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>Audit Logging</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>Access control</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>Invoice Payment</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>SLA</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>Email Support</p>
              </div>

              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>Live Chat Support</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-emerald-600 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className='inline pl-2'>10 hours contracted per month</p>
              </div>
            </div>
          </section>
          <CTAButton className='mt-6 w-10/12'>
            <span>
              <Link href='/login'>
                <a>
                  <span className='inline'>Start Trial</span> <ArrowRightIcon className='w-4 inline'></ArrowRightIcon>
                </a>
              </Link>
            </span>
          </CTAButton>
        </section>
      </div>
    </MarketingContainer>
  )
}
