/*
  Warnings:

  - You are about to drop the column `publishedDate` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "publishedDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "publishedDate";
