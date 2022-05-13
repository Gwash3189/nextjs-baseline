import { isUserAuthenticated } from 'domains/authentication'
import { getStaticPropsUser, StaticPropsUser } from 'domains/user'
import { NextPageContext } from 'next'

export type ProtectedPageProps = {
  authenticated: boolean
  user: StaticPropsUser
}

export async function pageIsProtected (context: NextPageContext) {
  let user: null | StaticPropsUser = null
  const [result, jwt] = await isUserAuthenticated(context)

  if (jwt !== null) {
    user = await getStaticPropsUser({ id: jwt.user.id })
  }

  return {
    authenticated: result,
    user
  }
}
