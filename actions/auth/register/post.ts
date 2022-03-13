import { User } from "@prisma/client"
import { NextApiResponse, NextApiRequest } from "next"
import { getBody } from "nextjs-backend-helpers"
import { IdentityRespository } from "repositories/identity"
import { UserRepository } from "repositories/user"
import * as yup from 'yup'

type registration = Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'verified'>
const schema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().required()
})

export function post (userRepository: UserRepository = new UserRepository(), identityRepository: IdentityRespository = new IdentityRespository()) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    let userRegistration: registration

    try {
      userRegistration = await schema.validate(getBody<registration>(req), { stripUnknown: true })
    } catch (error: any) {
      console.log('user input was invalid')
      let err: yup.ValidationError = error
      return res.status(400).json({
        path: err.path,
        errors: err.errors
      })
    }

    const user = await userRepository.findByEmail(userRegistration)

    if (user) {
      console.log('user already existed')
      return res.status(400).json({
        path: '',
        errors: ['user already exists']
      })
    } else {
      console.log('user does not exist')
      const newUser = await userRepository.create({
        name: userRegistration.name,
        email: userRegistration.email
      })
      const identity = await identityRepository.create({ user: newUser })
      console.log('identity created')
      res.json({
        url: `/verify?otp=${identity.otp}`
      })
    }
  }
}
