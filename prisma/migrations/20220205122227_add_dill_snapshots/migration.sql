-- CreateTable
CREATE TABLE "DillSnapshot" (
    "id" TEXT NOT NULL,
    "pickleLocked" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalDill" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DillSnapshot_pkey" PRIMARY KEY ("id")
);