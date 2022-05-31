import React from 'react'

export default function SkeletonRow () {
  return (
    <tr key='1'>
      <td className="px-6 py-4 whitespace-nowrap w-2/4">
        <div className="flex items-start">
          <div className='animate-pulse'>
            <div className="w-[134px] h-2 bg-slate-200 rounded" />
            <div className="h-2 bg-slate-200 rounded w-[134px]" />
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap animate-pulse w-1/4">
        <div className='h-2 bg-slate-200 rounded w-[62px]'/>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium w-full flex justify-end">
        <div className='h-2 bg-slate-200 rounded w-[62px]' />
      </td>
    </tr>
  )
}
