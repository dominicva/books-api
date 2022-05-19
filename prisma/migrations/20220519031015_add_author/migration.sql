/*
  Warnings:

  - You are about to drop the column `authors` on the `Book` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `Book` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Added the required column `authorId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Book_title_key";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "authors",
ADD COLUMN     "authorId" INTEGER NOT NULL,
ALTER COLUMN "title" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "imageLink" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
