import React from 'react'

type Props = {
    children: JSX.Element | string,
    className?: string,
    onClick?: (event: any) => void
}

export default function CTAButton (props: Props) {
  return (
    <button 
      onClick={props.onClick} 
      className={"py-2 w-20 text-center font-semibold text-md bg-pink-400 hover:bg-pink-500 transition-all drop-shadow-sm hover:drop-shadow-md text-white rounded-lg ml-6 " + props.className}>{props.children}</button>
  )
}
