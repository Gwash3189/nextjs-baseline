import { getBody, install } from 'nextjs-backend-helpers'
import { Controller } from 'nextjs-backend-helpers/controller'
import { NextApiRequest } from 'next'
import { UserRepository } from "repositories/user"
import * as yup from 'yup'
import { User } from '@prisma/client'

export const config = {
  api: { bodyParser: true }
}
abstract class AuthController<T>  {
  protected abstract loginUrl: string
  protected abstract getUser(id: string | number): Promise<T | null>
  protected abstract authenticateUsing(request: NextApiRequest): Promise<T>
}


type registration = { email: string }
class RegistrationController extends AuthController<User> {
  protected loginUrl = 'auth/login'

  async authenticateUsing(req: NextApiRequest) {
    const schema = yup.object().shape({
      email: yup.string().required(),
      password: yup.string().required()
    })

    const params = await schema.validate(getBody<registration>(req), { stripUnknown: true })
    const user = await UserRepository.findByEmail({ email: params.email })

    if (!user) {
      return false
    }

    return Auth.verify(params.password, user.password)
  }

  async getUser(id: string | number) {
    return await UserRepository.findById(id)
  }
}

export default install(RegistrationController)
