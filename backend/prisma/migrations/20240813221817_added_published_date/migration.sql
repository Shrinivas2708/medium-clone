/*
  Warnings:

  - Made the column `publishedDate` on table `Blog` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Blog" ALTER COLUMN "publishedDate" SET NOT NULL,
ALTER COLUMN "publishedDate" SET DEFAULT CURRENT_TIMESTAMP;
