import React, { ButtonHTMLAttributes } from 'react'
import classnames from 'classnames/dedupe'

type Props = ButtonHTMLAttributes<any> & {
    children: any,
    className?: string,
    onClick?: (event: any) => void
}

export default function CTAButton (props: Props) {
  return (
    <button
      onClick={props.onClick}
      className={classnames('focus:outline-none py-2 text-center font-semibold text-md bg-pink-400 hover:bg-pink-500 transition-all drop-shadow-sm hover:drop-shadow-md text-white rounded-lg focus:ring-pink-700 focus:ring-2 focus:ring-offset-2', props.className)}
    >{props.children}</button>
  )
}
