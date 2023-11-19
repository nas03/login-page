/*
  Warnings:

  - You are about to drop the `maincategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subcategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `food` DROP FOREIGN KEY `Food_slug_fkey`;

-- DropForeignKey
ALTER TABLE `subcategory` DROP FOREIGN KEY `SubCategory_main_category_fkey`;

-- DropTable
DROP TABLE `maincategory`;

-- DropTable
DROP TABLE `subcategory`;

-- CreateTable
CREATE TABLE `main_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `main_category` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `main_category_main_category_key`(`main_category`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sub_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `main_category` VARCHAR(191) NOT NULL,
    `sub_category` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `sub_category_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sub_category` ADD CONSTRAINT `sub_category_main_category_fkey` FOREIGN KEY (`main_category`) REFERENCES `main_category`(`main_category`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `food` ADD CONSTRAINT `food_slug_fkey` FOREIGN KEY (`slug`) REFERENCES `sub_category`(`slug`) ON DELETE RESTRICT ON UPDATE CASCADE;
