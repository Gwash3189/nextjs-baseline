import en from 'javascript-time-ago/locale/en.json'
import TimeAgo from 'javascript-time-ago'
import { Service } from '@prisma/client'

TimeAgo.addDefaultLocale(en)
export const timeAgo = new TimeAgo('en-US')

export function getPrettyTime (serviceRecord: Service) {
  return timeAgo.format(new Date(serviceRecord.updatedAt))
}

export function getServiceName (serviceRecord: Service) {
  return serviceRecord.name
}

export function getServiceStatus (serviceRecord: Service) {
  return serviceRecord.status
}

export function getServiceId (serviceRecord: Service) {
  return serviceRecord.id
}
