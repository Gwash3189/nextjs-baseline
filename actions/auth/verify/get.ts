import { decode } from "jsonwebtoken"
import { getQuery } from "nextjs-backend-helpers"
import { NextApiResponse, NextApiRequest } from "next"
import { verifyUser } from "domains/user"
import { deleteIdentity } from "domains/identity"
import { createAuthenticationCookie, createAuthenticationToken } from "domains/authentication"
import { createFlashMessagesCookie, setFlashMessages, successfulEmailVerification } from "domains/flash"

export function get () {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // const { otp } = getQuery<{ otp: string }>(req)
    // const decoded = decode(otp) as { id: string }

    // if (!otp || !decoded?.id) {
    //   console.log('invalid otp provided')
    //   return res.status(400).json({
    //     path: '',
    //     errors: ['Invalid otp provided']
    //   })
    // }

    // const { id } = decoded
    // const result = await verifyUser({ identityId: id })

    // if(result !== false) {
    //   console.log('user verified: ', result)
      const { date, token } = await createAuthenticationToken({ id: '8891a7e9-6de7-40b0-bd10-2f0d2a79bcec' })
      res.setHeader('Set-Cookie', [
          createAuthenticationCookie(token, date),
          createFlashMessagesCookie([successfulEmailVerification()])
      ])

      // await deleteIdentity({ id })
      // console.log('deleted their identity')
      return res.redirect('/app')
    // }

    // return res.status(400).json({
    //   path: '',
    //   errors: ['Invalid otp provided']
    // })
  }
}
