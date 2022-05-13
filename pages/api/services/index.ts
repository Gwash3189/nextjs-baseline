import { Controller, controller, install } from 'nextjs-backend-helpers'
import { NextApiRequest, NextApiResponse } from 'next'
import { ServiceRepository } from 'repositories/service'
import { Service } from '@prisma/client'

export const config = {
  api: { bodyParser: true }
}

class IndexServiceController extends Controller {
  async get(_req: NextApiRequest, res: NextApiResponse) {
    const service: Array<Service | null> = await ServiceRepository.all()
    return res.status(200).json(service)
  }
}

export default install(IndexServiceController)
