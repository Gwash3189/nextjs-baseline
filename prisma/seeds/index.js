const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


function main() {
  console.log('Starting seeds')
  prisma.health.createMany({
    data: [
      {
        name: 'Permissions Service',
        status: true,
      },
      {
        name: 'Feature Flag Service',
        status: false,
      }
    ]
  }).then(() => {
    console.log('Finished seeding');
  })
}

main()