import Link from 'next/link'
import React from 'react'

function Button (props: { children: JSX.Element | string }) {
  return (
    <button className="py-2 w-20 text-center font-semibold text-md text-pink-400 hover:text-pink-500 transition-all hover:border-pink-200 hover:underline">{props.children}</button>
  )
}

function ActiveButton (props: { children: JSX.Element | string }) {
  return (
    <button className="py-2 w-20 text-center font-semibold text-md text-pink-500 transition-all border-pink-200 underline">{props.children}</button>
  )
}

type Props = {
    active: boolean,
    href: string,
    children: JSX.Element | string
}

export default function NavButton (props: Props) {
  return (
    <Link href={props.href}>
      <a>
        {props.active && <ActiveButton>{props.children}</ActiveButton>}
        {!props.active && <Button>{props.children}</Button>}
      </a>
    </Link>
  )
}
