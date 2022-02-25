import React from 'react'

type Props = {
  children: string,
  highlight?: boolean
}

export default function AvailableFeature (props: Props) {
  const styles = props.highlight ? 'inline pl-7 text-slate-300 line-through' : 'inline pl-7 text-purple-400 line-through'

  return (
    <div>
      <p className={styles}>{props.children}</p>
    </div>
  )
}
