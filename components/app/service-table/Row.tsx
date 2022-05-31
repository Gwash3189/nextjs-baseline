import React, { useState } from 'react'

import { Service } from '@prisma/client'
import { getPrettyTime, getServiceId, getServiceName, getServiceStatus } from 'domains/service'
import classNames from 'classnames'

const fetcher = (url: string, opts = {}) => fetch(url, opts).then((res) => res.ok ? res.json() : Promise.reject(res))

type Props = {
  service: Service
}

function StatusIndicator (service: { status: boolean }) {
  const styles = service.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
  const statusText = service.status ? 'Healthy' : 'Down'
  return (
    <span className={classNames('px-2 inline-flex text-xs leading-5 font-semibold rounded-full', styles)}>
      {statusText}
    </span>
  )
}

type RefreshProps = {
  isRefreshing: boolean,
  serviceId: string,
  handleOnClick: (id: string) => () => void
}

function RefreshButton (props: RefreshProps) {
  if (props.isRefreshing) {
    return (
      <button className='text-indigo-400 hover:text-indigo-900'>
        Refresh
      </button>
    )
  } else {
    return (
      <button className='text-indigo-600 hover:text-indigo-900' onClick={props.handleOnClick(props.serviceId)}>
        Refresh
      </button>
    )
  }
}

export default function Row (props: Props) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [service, setService] = useState(props.service)

  const handleOnClick = (id: string) => {
    return async () => {
      setIsRefreshing(true)
      const { service: newService } = await fetcher(`/api/services/${getServiceId(service)}`)
      setTimeout(() => {
        setIsRefreshing(false)
        setService(newService)
      }, 5000)
    }
  }

  const trClasses = classNames(isRefreshing ? 'animate-pulse transition-all' : 'transition-all')

  return (
    <tr key={getServiceName(service)} className={trClasses}>
      <td className="px-6 py-4 whitespace-nowrap w-2/4">
        <div className="flex items-start">
          <div>
            <div className="text-sm font-medium text-gray-900">{getServiceName(service)}</div>
            <div className="text-sm text-gray-500">Updated: {getPrettyTime(service)}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap w-1/4">
        <StatusIndicator status={getServiceStatus(service)} />
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium w-1/4'>
        <RefreshButton
          isRefreshing={isRefreshing}
          handleOnClick={handleOnClick}
          serviceId={getServiceId(service)}
        />
      </td>
    </tr>
  )
}
