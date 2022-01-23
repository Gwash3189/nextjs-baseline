import { Health } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { HealthRespository } from 'repositories/health'

export function get (healthRespository = new HealthRespository()) {
  return async function handler (req: NextApiRequest, res: NextApiResponse) {
    let health: Array<Health | null> = await healthRespository.all()

    if (health === null) {
      const item = await healthRespository.create({ toggle: true, serviceName: 'Health Service', url: 'localhost:5555' })
      health = [item]
    }

    return res.status(200).json(health)
  }
}
