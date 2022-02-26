import React from 'react'
import { Service } from '@prisma/client'
import useSWR from 'swr'

import Chrome from 'components/marketing/MarketingChrome'
import TableBody from 'components/app/service-table/TableBody'

const fetcher = (url: string, opts = {}) => fetch(url, opts).then((res) => res.ok ? res.json() : Promise.reject(res))

export default function Home () {
  const { data = [], error } = useSWR<Service[]>('/api/services', fetcher)
  const isLoading = !error && !data

  return (
    <Chrome header='Dashboard' current='health checks'>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                    Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                    Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Refresh</span>
                    </th>
                  </tr>
                </thead>
                <TableBody services={data} isLoading={isLoading} />
              </table>
            </div>
          </div>
        </div>
      </div>
    </Chrome>
  )
}
