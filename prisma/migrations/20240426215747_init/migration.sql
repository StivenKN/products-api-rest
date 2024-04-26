-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "product_title_key" ON "product"("title");
