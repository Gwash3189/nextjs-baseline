import { User, Prisma, PrismaClient } from '.prisma/client'
import { BaseRespository } from 'repositories/base'
import { getExpiryTime } from 'domains/identity'

export type CreateServiceRecord = Prisma.UserCreateInput

export class UserRepository extends BaseRespository<Prisma.UserDelegate<any>, User> {
  getDataType (client: PrismaClient) {
    return client.user
  }

  async verifyUser({ id }: { id: string }) {
    return await this.querySingle(async (user) => {
      return await user.update({
        where: {
          id,
        },
        data: {
          verified: true
        }
      })
    }) as User
  }

  async findByEmail ({ email }: { email: string}) {
    return await this.querySingle(async (user) => {
      return await user.findUnique({
        where: {
          email
        }
      })
    })
  }

  async create ({ email, name }: Prisma.UserCreateInput) {
    return await this.querySingle(async (user) => {
      return await user.create({
        data: {
          email,
          name
        }
      })
    }) as User
  }
}
