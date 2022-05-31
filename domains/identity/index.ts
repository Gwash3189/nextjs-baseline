import { sign } from "jsonwebtoken"
import { IdentityRespository } from "repositories/identity"

export const createOtp = (value: { id: string }) => {
  return sign(value, (process.env as unknown as any).JWT_SECRET)
}

export const deleteIdentity = async (
  { id }: { id: string },
  identityRespository: IdentityRespository = new IdentityRespository()
  ) => {
    return await identityRespository.delete({ id })
}
