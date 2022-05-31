const { PrismaClient } = require('@prisma/client')
const faker = require('faker')
const prisma = new PrismaClient()


function main() {
  console.log('Starting seeds')
  prisma.service.createMany({
    data: new Array(50).fill(50).map(() => ({
      name: faker.company.companyName(),
      status: faker.datatype.boolean(),
      updatedAt: faker.date.recent()
    }))
  }).then(() => {
    console.log('Finished seeding');
  })
}

main()
