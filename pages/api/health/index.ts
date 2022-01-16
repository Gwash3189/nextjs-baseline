import { register } from 'nextjs-backend-helpers'
import { get } from 'actions/health/get'
require('repositories/connect')

export const config = {
  api: { bodyParser: true }
}

export default register({
  get
})
