import { Controller, getQuery, install } from 'nextjs-backend-helpers'
import { NextApiRequest, NextApiResponse } from 'next'
import { ServiceRepository } from 'repositories/service'

export const config = {
  api: { bodyParser: true }
}

class GetServiceByIdController extends Controller {
  async get(req: NextApiRequest, res: NextApiResponse) {
    const { id } = getQuery<{ id: string }>(req)
    const service = await ServiceRepository.findById(id)

    if (service) {
      return res.status(200).json({ service })
    } else {
      return res.status(404).json({ status: 404 })
    }
  }
}

export default install(GetServiceByIdController)
