import { Health, Prisma, PrismaClient } from '.prisma/client'
import { BaseRespository } from 'repositories/base'

export type CreateHealthRecord = {
    status: boolean,
    url: string,
    name: string
}

export class HealthRespository extends BaseRespository<Prisma.HealthDelegate<any>, Health> {
  getDataType (client: PrismaClient) {
    return client.health
  }

  async create ({ status, url, name }: CreateHealthRecord) {
    return await this.querySingle(async (author) => {
      return await author.create({
        data: {
          status,
          name,
          url
        }
      })
    })
  }
}
