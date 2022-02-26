import { NextApiRequest, NextApiResponse } from 'next'
import { ServiceRespository } from 'repositories/service'
import { getQuery } from 'nextjs-backend-helpers'

export function get (serviceRespository = new ServiceRespository()) {
  return async function handler (req: NextApiRequest, res: NextApiResponse) {
    const { id } = getQuery<{ id: string }>(req)
    const service = await serviceRespository.findById(id)
    
    if (service) {
      return res.status(200).json({ service })
    } else {
      return res.status(404).json({ status: 404 })
    }
  }
}
