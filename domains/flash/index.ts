import cookie from 'cookie'
import { NextApiResponse, NextPageContext } from "next"

export const flashHeaderKey = 'bigbird-flash'

export type Flash = {
  title: string,
  message: string,
  type: FlashTypes.Success | FlashTypes.Warning | FlashTypes.Error
}

export type SuccessFlash = {
  type: FlashTypes.Success
} & Flash

export type WarningFlash = {
  type: FlashTypes.Warning
} & Flash

export type ErrorFlash = {
  type: FlashTypes.Error
} & Flash

export enum FlashTypes {
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

function successFlashMessage({ title, message }: Omit<Flash, 'type'>): SuccessFlash {
  return {
    type: FlashTypes.Success,
    title,
    message
  }
}

export function successfulEmailVerification(): Flash {
  return successFlashMessage({
    title: 'Email Verified!',
    message: 'Your email has been verified',
  })
}

export function serialiseFlashMessages(messages: Flash[]) {
  return JSON.stringify(messages)
}

export function parseFlashMessages(flashHeaderValue: string) {
  return JSON.parse(flashHeaderValue)
}

export function createFlashMessagesCookie(messages: Flash[]) {
  const date = new Date()
  date.setHours(date.getHours() + 1)

  return cookie.serialize(flashHeaderKey, serialiseFlashMessages(messages), {
    expires: date,
    path: '/'
  })
}

export function setFlashMessages(res: NextApiResponse, ...messages: Flash[]) {
  return res.setHeader(flashHeaderKey, serialiseFlashMessages(messages))
}

export function getFlashMessages(context: NextPageContext): Flash[] {
  return JSON.parse(cookie.parse(context.req?.headers.cookie || '')[flashHeaderKey] || '[]')
}
