import { Health, Prisma, PrismaClient } from '.prisma/client'
import { BaseRespository } from 'repositories/base'

export type CreateHealth = {
    toggle: boolean
}

export class HealthRespository extends BaseRespository<Prisma.HealthDelegate<any>, Health> {
  getDataType (client: PrismaClient) {
    return client.health
  }

  async create ({ toggle }: CreateHealth) {
    return await this.querySingle(async (author) => {
      return await author.create({
        data: {
          toggle
        }
      })
    })
  }
}
