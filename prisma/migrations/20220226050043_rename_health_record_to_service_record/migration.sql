/*
  Warnings:

  - You are about to drop the `Health` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Health";

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL DEFAULT E'',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);
