import Link from 'next/link'
import React from 'react'
import classNames from 'classnames/dedupe'

function Button (props: { children: JSX.Element | string, className?: string }) {
  return (
    <button className={classNames('focus:rounded-lg focus:outline-none focus:ring-pink-700 focus:ring-2 focus:ring-offset-2 py-2 w-20 text-center font-semibold text-md text-pink-400 hover:text-pink-500 transition-all hover:border-pink-200 hover:underline', props.className)}>{props.children}</button>
  )
}

function ActiveButton (props: { children: JSX.Element | string, className?: string }) {
  return (
    <button className={classNames('focus:rounded-lg focus:outline-none focus:ring-pink-700 focus:ring-2 focus:ring-offset-2 py-2 w-20 text-center font-semibold text-md text-pink-500 transition-all border-pink-200 underline', props.className)}>{props.children}</button>
  )
}

type Props = {
  active: boolean,
  href: string,
  children: JSX.Element | string
  className?: string
}

export default function NavButton (props: Props) {
  return (
    <Link href={props.href}>
      <a tabIndex={-1}>
        {props.active && <ActiveButton className={props.className}>{props.children}</ActiveButton>}
        {!props.active && <Button className={props.className}>{props.children}</Button>}
      </a>
    </Link>
  )
}
