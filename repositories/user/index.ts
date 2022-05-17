import { User, Prisma, PrismaClient } from '@prisma/client'
import { Facade } from 'nextjs-backend-helpers'
import { BaseRespository } from 'repositories/base'
import { string } from 'yup'

export type CreateServiceRecord = Prisma.UserCreateInput

export class UserRepository extends BaseRespository<Prisma.UserDelegate<any>, User> {
  mock(method: string, imple: () => any) {
    Facade.mock(method, imple)
  }

  reset(method: string) {
    Facade.reset(method)
  }

  getDataType (client: PrismaClient) {
    return client.user
  }

  async verifyUser({ id }: { id: string }) {
    return await this.querySingle(async (user) => {
      return await user.({
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
    })
  }
}
