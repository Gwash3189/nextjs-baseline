import React from 'react'
import classnames from 'classnames/dedupe'

type Props = {
    children: JSX.Element | string,
    className?: string,
    onClick?: (event: any) => void
}

export default function CTAButton (props: Props) {
  return (
    <button
      onClick={props.onClick}
      className={classnames('py-2 text-center font-semibold text-md bg-pink-400 hover:bg-pink-500 transition-all drop-shadow-sm hover:drop-shadow-md text-white rounded-lg ml-6', props.className)}>{props.children}</button>
  )
}
