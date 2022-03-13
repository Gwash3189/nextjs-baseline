import { register } from 'nextjs-backend-helpers'
import { post } from 'actions/auth/register/post'

export const config = {
  api: { bodyParser: true }
}

export default register({
  post
})
