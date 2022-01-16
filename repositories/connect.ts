import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient | null

export const getClient = () => {
    if (!prisma) {
        prisma = new PrismaClient()
    }
    return prisma
}
