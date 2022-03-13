import { Identity, User, Prisma, PrismaClient } from '.prisma/client'
import { getExpiryTime } from 'domains/authentication'
import { createOtp } from 'domains/identity'
import { BaseRespository } from 'repositories/base'

export type CreateIdentityRecord = {
    status: boolean,
    url: string,
    name: string
}

export class IdentityRespository extends BaseRespository<Prisma.IdentityDelegate<any>, Identity> {
  getDataType (client: PrismaClient) {
    return client.identity
  }

  async delete({ id }: { id: string}) {
    return await this.querySingle(async (identity) => {
      return await identity.delete({
        where: {
          id
        }
      })
    })
  }

  async update({ id, data }: { id: string, data: Prisma.IdentityUpdateInput }) {
    return await this.querySingle(async (identity) => {
      return await identity.update({
        where: {
          id
        },
        data
      })
    })
  }

  async create ({ user }: { user: User }) {
    return await this.querySingle(async (identity) => {
      const identityRow = await identity.create({
        data: {
          expires: getExpiryTime(),
          user: {
            connect: {
              id: user.id
            }
          }
        }
      })

      return this.update({ id: identityRow.id, data: { otp: createOtp({ id: identityRow.id }) }})
    }) as Identity
  }
}
