import { useRouter } from "next/router"

type Props = {
  authenticated: boolean,
  children: JSX.Element
}

export const Protected = (props: Props) => {
  const result = props.authenticated ? props.children : null
  const router = useRouter()

  if(!result) {
    router.push('/')
    return (<></>)
  }

  return props.children
}
