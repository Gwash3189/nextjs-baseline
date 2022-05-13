import React from 'react'
import useSWR from 'swr'
import { Service } from '@prisma/client'
import MarketingChrome from 'components/marketing/MarketingChrome'
import { TableBody } from 'components/app/service-table/TableBody'
import { ProtectedPageProps } from 'components/authentication/protected'
import { NextPageContext } from 'next'
import { TableHead } from 'components/app/service-table/TableHead'
import { FlashMessages, FlashMessagesProps, pageUsesFlash } from 'components/flash'

const fetcher = (url: string, opts = {}) => fetch(url, opts).then((res) => res.ok ? res.json() : Promise.reject(res))

type Props = ProtectedPageProps & FlashMessagesProps

export async function getServerSideProps (context: NextPageContext) {
  return {
    props: {
      // ...await pageIsProtected(context),
      ...await pageUsesFlash(context)
    }
  }
}

export default function Home (props: Props) {
  const { data = [], error } = useSWR<Service[]>('/api/services', fetcher)
  const isLoading = !error && !data

  return (
    // <CurrentUserProvider user={props.user}>
    <MarketingChrome header='Dashboard' current='health checks'>
      <>
        <FlashMessages messages={props.messages}/>
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
      </>
    </MarketingChrome>
    // </CurrentUserProvider>
  )
}
