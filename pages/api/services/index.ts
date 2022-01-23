import { register } from 'nextjs-backend-helpers'
import { get } from 'actions/services/get'
require('repositories/connect')

export const config = {
  api: { bodyParser: true }
}

export default register({
  get
})
