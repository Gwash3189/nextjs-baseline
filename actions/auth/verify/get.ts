import { decode } from "jsonwebtoken"
import { getQuery } from "nextjs-backend-helpers"
import { NextApiResponse, NextApiRequest } from "next"
import { verifyUser } from "domains/user"
import { deleteIdentity } from "domains/identity"
import { createAuthenticationCookie, createAuthenticationToken } from "domains/authentication"

export function get () {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { otp } = getQuery<{ otp: string }>(req)
    const decoded = decode(otp) as { id: string }

    if (!otp || !decoded?.id) {
      return res.status(400).json({
        path: '',
        errors: ['Invalid otp provided']
      })
    }

    const { id } = decoded
    const result = await verifyUser({ identityId: id })

    if(result !== false) {
      const { date, token } = await createAuthenticationToken({ id: result.id })
      res.setHeader('Set-Cookie', createAuthenticationCookie(token ,date))
      await deleteIdentity({ id })
      return res.json({ success: true })
    }

    return res.status(400).json({
      path: '',
      errors: ['Invalid otp provided']
    })
  }
}
