import React, { useEffect } from 'react'
import { Flash, flashHeaderKey, FlashTypes, getFlashMessages } from 'domains/flash'
import { NextPageContext } from 'next'
import { SuccessMessage } from './SuccessMessage'
import { WarningMessage } from './WarningMessage'
import { ErrorMessage } from './ErrorMessage'

export type FlashMessagesProps = {
  messages: Flash[]
}

export async function pageUsesFlash (context: NextPageContext) {
  return {
    messages: getFlashMessages(context)
  }
}

export function FlashMessages (props: FlashMessagesProps = { messages: [] }) {
  useEffect(() => {
    // delete the cookie
    document.cookie = `${flashHeaderKey}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`
  })

  return (
    <div
      aria-live="assertive"
      className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
    >
      {props.messages.map((flash, index) => {
        switch (flash.type) {
        case FlashTypes.Success:
          return <SuccessMessage title={flash.title} key={index}>{flash.message}</SuccessMessage>
        case FlashTypes.Warning:
          return <WarningMessage title={flash.title} key={index}>{flash.message}</WarningMessage>
        case FlashTypes.Error:
          return <ErrorMessage title={flash.title} key={index}>{flash.message}</ErrorMessage>
        default:
          return <></>
        }
      })}

    </div>
  )
}
