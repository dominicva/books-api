import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create author and book
  const author = await prisma.author.create({
    data: {
      name: 'Yuval Noah Harari',
      books: {
        create: [
          {
            title: 'Sapiens',
            imageLink:
              'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427068429l/23346740.jpg',
            publishedDate: '2017',
            subtitle: 'A Brief History of Humankind',
            description:
              'Sapiens, the book, takes us on a breath-taking ride through our entire human history, from its evolutionary roots to the age of capitalism and genetic engineering, to uncover why we are the way we are.',
            pageCount: 491,
          },
        ],
      },
    },
  });

  console.log('Success! Added');
  console.log(author);
  console.log('to the database');

  // Return author
  const returnAuthor = await prisma.author.findUnique({
    where: {
      id: author.id,
    },
  });

  console.log('...and then we retrived their data from the database too:');
  console.log(returnAuthor);
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('Disconnected from database...');
  });
