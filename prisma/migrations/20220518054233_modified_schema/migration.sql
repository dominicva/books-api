/*
  Warnings:

  - You are about to drop the column `imageLinks` on the `Book` table. All the data in the column will be lost.
  - Added the required column `imageLink` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "imageLinks",
ADD COLUMN     "imageLink" TEXT NOT NULL,
ALTER COLUMN "publishedDate" SET DATA TYPE TEXT;
