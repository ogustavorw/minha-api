-- CreateTable
CREATE TABLE "VendeCarro" (
    "id" SERIAL NOT NULL,
    "manufactureYear" INTEGER NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "horsepower" INTEGER NOT NULL,
    "engine" TEXT NOT NULL,

    CONSTRAINT "VendeCarro_pkey" PRIMARY KEY ("id")
);
