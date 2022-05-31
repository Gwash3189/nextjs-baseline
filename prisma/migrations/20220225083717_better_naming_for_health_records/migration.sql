/*
  Warnings:

  - You are about to drop the column `serviceName` on the `Health` table. All the data in the column will be lost.
  - You are about to drop the column `toggle` on the `Health` table. All the data in the column will be lost.
  - Added the required column `name` to the `Health` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Health` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Health" DROP COLUMN "serviceName",
DROP COLUMN "toggle",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL;
