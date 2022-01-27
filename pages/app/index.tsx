import React from 'react'
import Chrome from 'components/Chrome'

const services = [
  {
    name: 'Permissions Service',
    status: false,
    lastChecked: 'Checked five minutes ago'
  }
]

function StatusIndicator (service: { status: boolean }) {
  const styles = service.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
  const statusText = service.status ? 'Healthy' : 'Down'
  return (
    <span className={'px-2 inline-flex text-xs leading-5 font-semibold rounded-full ' + styles}>
      {statusText}
    </span>
  )
}

export default function Home () {
  return (
    <Chrome header='Dashboard' current='dashboard'>
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
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {services.map((service) => (
                    <tr key={service.name}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-start">
                          <div className="">
                            <div className="text-sm font-medium text-gray-900">{service.name}</div>
                            <div className="text-sm text-gray-500">{service.lastChecked}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusIndicator status={service.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Refresh
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Chrome>
  )
}
