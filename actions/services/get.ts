import { Health } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { HealthRespository } from 'repositories/health'

export function get (healthRespository = new HealthRespository()) {
  return async function handler (req: NextApiRequest, res: NextApiResponse) {
    let health: Array<Health | null> = await longPromise(() => healthRespository.all()) as Array<Health | null>

    if (health === null) {
      const item = await longPromise(() => {
        console.log('asdas');
        
        return healthRespository.create({ toggle: true, serviceName: 'Health Service', url: 'localhost:5555' })
      }) as Health | null
      health = [item]
    }

    return res.status(200).json(health)
  }
}

const longPromise = (fn: Function) => {
  const p = new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(fn())
    }, 5000)
  })

  return p
}
