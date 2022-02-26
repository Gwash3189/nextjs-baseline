import { register } from 'nextjs-backend-helpers'
import { get } from 'actions/services/[id]/get'

export const config = {
  api: { bodyParser: true }
}

export default register({
  get
})
