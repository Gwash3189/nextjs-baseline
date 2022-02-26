import React from 'react'

import { Service } from '@prisma/client'
import Row from './Row'
import SkeletonRow from './SkeletonRow'
import { getServiceId } from 'domains/service'

type Props = {
  services: Service[],
  isLoading: Boolean
}

export default function TableBody (props: Props) {
  if (!props.isLoading) {
    return (
      <tbody className="bg-white divide-y divide-gray-200">
        {props.services.map((service) => (
          <Row key={getServiceId(service)} service={service} />
        ))}
      </tbody>
    )
  } else {
    return (
      <tbody className="bg-white divide-y divide-gray-200">
        <SkeletonRow />
      </tbody>
    )
  }
}
