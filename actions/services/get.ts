import { Health } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { HealthRespository } from 'repositories/health'

export function get (healthRespository = new HealthRespository()) {
  return async function handler (req: NextApiRequest, res: NextApiResponse) {
    let health: Array<Health | null> = await healthRespository.all()
    
    return res.status(200).json(health)
  }
}
