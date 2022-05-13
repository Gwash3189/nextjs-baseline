import { StaticPropsUser } from 'domains/user'
import { createContext, useContext, useState } from 'react'

const CurrentUserContext = createContext<StaticPropsUser | null>(null)
type Props = {
  user: StaticPropsUser,
  children: JSX.Element
}

export function useCurrentUser () {
  const context = useContext(CurrentUserContext)
  if (!context) {
    throw new Error('useCurrentUser must be used within a CountProvider')
  }
  return context
}

export function CurrentUserProvider (props: Props) {
  const [currentUser] = useState(props.user)
  return <CurrentUserContext.Provider value={currentUser} {...props} />
}
