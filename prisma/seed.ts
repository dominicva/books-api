import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const books = [
  {
    title: 'Sapiens',
    authors: ['Yuval Noah Harari'],
    publishedDate: '2017',
    subtitle: 'A Brief History of Humankind',
    description:
      'Sapiens, the book, takes us on a breath-taking ride through our entire human history, from its evolutionary roots to the age of capitalism and genetic engineering, to uncover why we are the way we are.',
    pageCount: 491,
    imageLink:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427068429l/23346740.jpg',
  },
  {
    title: 'Lifespan',
    authors: ['David A. Sinclair', 'Matthew D. LaPlante'],
    publishedDate: '2019',
    subtitle: "Why We Age — and Why We Don't Have To",
    description:
      'A NEW YORK TIMES BESTSELLER “Brilliant and enthralling.”​ —The Wall Street Journal A paradigm-shifting book from an acclaimed Harvard Medical School scientist and one of Time’s most influential people. It’s a seemingly undeniable truth that aging is inevitable. But what if everything we’ve been taught to believe about aging is wrong? What if we could choose our lifespan? In this groundbreaking book, Dr. David Sinclair, leading world authority on genetics and longevity, reveals a bold new theory for why we age. As he writes: “Aging is a disease, and that disease is treatable.” This eye-opening and provocative work takes us to the frontlines of research that is pushing the boundaries on our perceived scientific limitations, revealing incredible breakthroughs—many from Dr. David Sinclair’s own lab at Harvard—that demonstrate how we can slow down, or even reverse, aging. The key is activating newly discovered vitality genes, the descendants of an ancient genetic survival circuit that is both the cause of aging and the key to reversing it. Recent experiments in genetic reprogramming suggest that in the near future we may not just be able to feel younger, but actually become younger. Through a page-turning narrative, Dr. Sinclair invites you into the process of scientific discovery and reveals the emerging technologies and simple lifestyle changes—such as intermittent fasting, cold exposure, exercising with the right intensity, and eating less meat—that have been shown to help us live younger and healthier for longer. At once a roadmap for taking charge of our own health destiny and a bold new vision for the future of humankind, Lifespan will forever change the way we think about why we age and what we can do about it.',
    pageCount: 432,
    imageLink:
      'https://books.google.com/books/content?id=x--oDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
];

async function main() {
  console.log(`Start seeding the books database...`);
  for (const b of books) {
    const book = await prisma.book.create({
      data: b,
    });
    console.log(`Added book with id: ${book.id}\n\t${book.title}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
