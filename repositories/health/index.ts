import { Health, Prisma, PrismaClient } from '.prisma/client'
import { BaseRespository } from 'repositories/base'

export type CreateHealthRecord = {
    toggle: boolean,
    url: string,
    serviceName: string
}

export class HealthRespository extends BaseRespository<Prisma.HealthDelegate<any>, Health> {
  getDataType (client: PrismaClient) {
    return client.health
  }

  async create ({ toggle, url, serviceName }: CreateHealthRecord) {
    return await this.querySingle(async (author) => {
      return await author.create({
        data: {
          toggle,
          serviceName,
          url
        }
      })
    })
  }
}
