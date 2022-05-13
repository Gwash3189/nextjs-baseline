import cookie from 'cookie'
import { isUserVerified } from 'domains/user'
import { sign, verify } from 'jsonwebtoken'
import { NextPageContext } from 'next'

const expiryHours = 1

type AuthenticationCookie = {
  'bigbird-authentication': string | undefined
}

export type JWTToken = {
  user: {
    id: string
  },
  account: {
    id: null
  },
  expiry: Date
}

export const isTokenExpired = (date: Date) => {
  return new Date() > date
}

export const createAuthenticationCookie = (token: string, date: Date) => {
  return cookie.serialize('bigbird-authentication', token, {
    httpOnly: true,
    expires: date,
    path: '/'
  })
}

export const decodeJwt = async (token: string): Promise<JWTToken> => {
  return new Promise((resolve, reject) => {
    verify(token, (process.env as unknown as any).JWT_SECRET, (err: any, decoded: any) => {
      if (err) {
        return reject(err)
      }

      return resolve(decoded)
    })
  })
}

export const getExpiryTime = () => {
  const time = new Date()
  time.setHours(time.getHours() + expiryHours)

  return time
}

export const createTokenExpiryTime = () => {
  return getExpiryTime()
}

export const createAuthenticationToken = async ({ id }: { id: string }) => {
  const date = createTokenExpiryTime()
  const token = sign({
    user: {
      id
    },
    account: {
      id: null
    },
    expiry: date
  }, (process.env as unknown as any).JWT_SECRET)

  return {
    token,
    date
  }
}
export const isUserAuthenticated = async (context: NextPageContext): Promise<[boolean, JWTToken | null]> => {
  const result = cookie.parse(context.req?.headers.cookie || '') as AuthenticationCookie

  if (!result['bigbird-authentication']) {
    console.log('no authentication token set')
    return [false, null]
  }

  const jwt = await decodeJwt(result['bigbird-authentication'])
  if (await !isTokenExpired(jwt.expiry)) {
    console.log('token is not expired')
    if (await isUserVerified({ id: jwt.user.id })) {
      console.log('user is valid')
      return [true, jwt]
    }
  }

  return [false, null]
}
