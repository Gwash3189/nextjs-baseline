import { User } from '@prisma/client'
import { IdentityRespository } from 'repositories/identity'
import { UserRepository } from 'repositories/user'

export type StaticPropsUser = Omit<User, 'createdAt' | 'updatedAt'>

export type JWTToken = {
  user: {
    id: string
  },
  account: {
    id: null
  },
  expiry: Date
}

export const isUserVerified = async (
  { id }: { id: string },
  userRepository: UserRepository = new UserRepository()
) => {
  const user = await userRepository.findById(id)

  if (user === null || user.verified === false) {
    return false
  }

  return true
}

export const verifyUser = async (
  { identityId }: { identityId: string },
  userRepository: UserRepository = new UserRepository(),
  identityRepository: IdentityRespository = new IdentityRespository()
) => {
  const identity = await identityRepository.findById(identityId)

  if (identity) {
    const user = await userRepository.verifyUser({ id: identity.userId })
    return user
  }

  return false
}

export const getUser = async (
  { id }: { id: string },
  userRepository: UserRepository = new UserRepository()
) => {
  return await userRepository.findById(id)
}

export const getStaticPropsUser = async (
  { id }: { id: string },
): Promise<StaticPropsUser | null> => {
  const user = await getUser({ id }) as Partial<User>

  if (user) {
    delete user.createdAt
    delete user.updatedAt
  }

  return user as StaticPropsUser
}
