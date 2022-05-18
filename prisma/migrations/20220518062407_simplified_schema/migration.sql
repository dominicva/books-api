/*
  Warnings:

  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AuthorsOnBooks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CategoriesOnBooks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[title]` on the table `Book` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "AuthorsOnBooks" DROP CONSTRAINT "AuthorsOnBooks_authorId_fkey";

-- DropForeignKey
ALTER TABLE "AuthorsOnBooks" DROP CONSTRAINT "AuthorsOnBooks_bookId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnBooks" DROP CONSTRAINT "CategoriesOnBooks_bookId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnBooks" DROP CONSTRAINT "CategoriesOnBooks_categoryId_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "authors" TEXT[];

-- DropTable
DROP TABLE "Author";

-- DropTable
DROP TABLE "AuthorsOnBooks";

-- DropTable
DROP TABLE "CategoriesOnBooks";

-- DropTable
DROP TABLE "Category";

-- CreateIndex
CREATE UNIQUE INDEX "Book_title_key" ON "Book"("title");
