import { User } from '@prisma/client'
import * as SgMail from '@sendgrid/mail'
import { readFile } from 'fs/promises'

SgMail.setApiKey((process.env as unknown as any).DEVELOPMENT_SENDGRID_API_KEY)

export async function sendNewUserEmail(user: User, url: string) {
  const newUserTemplate = await readFile('./templates/new-account.html').toString()
  return await SgMail.send({
    to: user.email,
    from: 'beck.web.adam@gmail.com',
    subject: 'Verify your email address - Passwordless Authentication',
    text: `Hi ${user.name}! You've signed up for Birds Nest - Welcome! To finish signing up, you need to verify your email by visiting this link: localhost:3000${url}`,
    html: newUserTemplate
  })
}
