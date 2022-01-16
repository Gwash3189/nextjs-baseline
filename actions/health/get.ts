import { NextApiRequest, NextApiResponse } from 'next'
import { getQuery } from 'nextjs-backend-helpers'
import { HealthRespository } from 'repositories/health'

export function get (healthRespository = new HealthRespository()) {
  return async function handler (req: NextApiRequest, res: NextApiResponse) {
    let health = await healthRespository.first()
    const query = getQuery<object>(req)

    if (health === null) {
      health = await healthRespository.create({ toggle: true })
    }

    return res.status(200).json({ health, ...query })
  }
}
