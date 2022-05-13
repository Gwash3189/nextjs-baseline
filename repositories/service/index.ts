import 'reflect-metadata'
import { Service, Prisma, PrismaClient } from '.prisma/client'
import { BaseRespository } from 'repositories/base'
import { Facade, repository, Logger } from 'nextjs-backend-helpers'

export type CreateServiceRecord = {
    status: boolean,
    url: string,
    name: string
}

@repository()
class Implementation extends BaseRespository<Prisma.ServiceDelegate<any>, Service> {
  getDataType (client: PrismaClient) {
    return client.service
  }

  async create ({ status, url, name }: CreateServiceRecord) {
    return await this.querySingle(async (service) => {
      return await service.create({
        data: {
          status,
          name,
          url
        }
      })
    })
  }
}

export const ServiceRepository = Facade.create(Implementation)
