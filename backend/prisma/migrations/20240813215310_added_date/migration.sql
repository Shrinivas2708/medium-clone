/*
  Warnings:

  - You are about to drop the column `data` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "data",
ADD COLUMN     "publishedDate" TIMESTAMP(3);
