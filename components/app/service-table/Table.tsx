import { Service } from '@prisma/client'
import { get } from 'domains/remote'
import React from 'react'
import useSWR from 'swr'
import { TableBody } from './TableBody'
import { TableHead } from './TableHead'

export function Table () {
  const { data = [], error } = useSWR<Service[]>('/api/services', (url: string) => get(url).then(r => r.json()))
  const isLoading = !error && !data

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <TableHead />
              <TableBody services={data} isLoading={isLoading} />
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
