import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getAll() {
  console.log('Retrieving books from the database...');
  const allBooks = await prisma.book.findMany();
  console.log('... and here they are');
  console.log(allBooks);
}

getAll()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('... disconnected from database');
  });
