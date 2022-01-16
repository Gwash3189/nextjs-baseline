import { Repository } from 'nextjs-backend-helpers'
import { getClient } from 'repositories/connect'

export abstract class BaseRespository<T, X> extends Repository<T, X> {
  getClient () {
    return getClient()
  }
}
