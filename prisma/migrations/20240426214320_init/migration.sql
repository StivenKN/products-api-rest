-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_title_key" ON "user"("title");
