import React from 'react'
import Head from 'next/head'
import useSWR from 'swr'
import { Health } from '@prisma/client'
const fetcher = (url: string, opts = {}) => fetch(url, opts).then((res) => res.ok ? res.json() : Promise.reject(res))

function ServiceList ({ services }: { services: Health[] }) {
  return (
    <div>
      {services.map(service => {
        const textColor = service.toggle ? ' text-green-600' : ' text-red-600'

        return (
          <p key={service.id} className={'mt-3 text-2xl' + textColor}>
            <a href={service.url}>{service.serviceName}</a>
          </p>
        )
      })}
    </div>
  )
}

function LoadingMessage () {
  return (
    <div className="animate-pulse flex space-x-4">
      <p className='inline text-zinc-500'>Loading</p>
    </div>
  )
}

export default function Home () {
  const { data } = useSWR<Health[]>('/api/services', fetcher)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Fullstack NextJS with nextjs-backend-helpers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Fullstack NextJS with nextjs-backend-helpers
        </h1>

        <div>
          <p className='mt-8'>This service retrieves a list of services, displayed below, and colour-codes their names based upon their health.</p>
          <p className='mt-2'>We use useSWR, so the data is periodically updated and refreshed.</p>
        </div>

        <h2 className="mt-3 text-2xl">
          Services
        </h2>

        {data ? <ServiceList services={data}/> : <LoadingMessage/>}

      </main>
    </div>
  )
}
