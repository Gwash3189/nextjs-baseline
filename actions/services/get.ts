import { Service } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { ServiceRespository } from 'repositories/service'

export function get (serviceRespository = new ServiceRespository()) {
  return async function handler (req: NextApiRequest, res: NextApiResponse) {
    console.log('getting service records')
    const service: Array<Service | null> = await serviceRespository.all()
    console.log('returning service records')
    return res.status(200).json(service)
  }
}
