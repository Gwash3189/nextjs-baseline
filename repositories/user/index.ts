import { User, Prisma, PrismaClient } from '.prisma/client'
import { Facade, repository } from 'nextjs-backend-helpers'
import { BaseRespository } from 'repositories/base'

export type CreateServiceRecord = Prisma.UserCreateInput

@repository()
class UserRepositoryImplementation extends BaseRespository<Prisma.UserDelegate<any>, User> {
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
    })
  }
}

export const UserRepository = Facade.create(UserRepositoryImplementation)
