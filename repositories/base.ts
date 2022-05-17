import { PrismaClient } from '@prisma/client'
import { BaseRepository as Base } from 'nextjs-backend-helpers'

export abstract class BaseRespository<T, X> extends Base<T, X> {
  createClient() {
    return new PrismaClient()
  }
}
