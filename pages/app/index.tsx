import React from 'react'
import useSWR from 'swr'
import { Service } from '@prisma/client'
import MarketingChrome from 'components/marketing/MarketingChrome'
import TableBody from 'components/app/service-table/TableBody'
import { NextPageContext } from 'next'
import { isUserAuthenticated } from 'domains/authentication'
import { getStaticPropsUser, StaticPropsUser } from 'domains/user'
import { Protected } from 'components/authentication/protected'

const fetcher = (url: string, opts = {}) => fetch(url, opts).then((res) => res.ok ? res.json() : Promise.reject(res))

export async function getServerSideProps(context: NextPageContext) {
  let user: null | StaticPropsUser = null
  const [result, jwt] = await isUserAuthenticated(context)

  if (jwt !== null) {
    user = await getStaticPropsUser({ id: jwt.user.id })
  }

  return {
    props: {
      authenticated: result,
      user
    }
  }
}

type Props = {
  authenticated: boolean,
  user: null | StaticPropsUser
}

export default function Home (props: Props) {
  const { data = [], error } = useSWR<Service[]>('/api/services', fetcher)
  const isLoading = !error && !data

  return (
    <Protected authenticated={props.authenticated}>
      <MarketingChrome header='Dashboard' current='health checks'>
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
      </MarketingChrome>
    </Protected>

  )
}
