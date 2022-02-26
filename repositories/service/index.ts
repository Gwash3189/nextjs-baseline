import { Service, Prisma, PrismaClient } from '.prisma/client'
import { BaseRespository } from 'repositories/base'

export type CreateServiceRecord = {
    status: boolean,
    url: string,
    name: string
}

export class ServiceRespository extends BaseRespository<Prisma.ServiceDelegate<any>, Service> {
  getDataType (client: PrismaClient) {
    return client.service
  }

  async create ({ status, url, name }: CreateServiceRecord) {
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
