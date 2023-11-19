-- CreateTable
CREATE TABLE `MainCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `main_category` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `MainCategory_main_category_key`(`main_category`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `main_category` VARCHAR(191) NOT NULL,
    `sub_category` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SubCategory_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Food` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(191) NOT NULL,
    `food` VARCHAR(191) NOT NULL,
    `calories` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SubCategory` ADD CONSTRAINT `SubCategory_main_category_fkey` FOREIGN KEY (`main_category`) REFERENCES `MainCategory`(`main_category`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Food` ADD CONSTRAINT `Food_slug_fkey` FOREIGN KEY (`slug`) REFERENCES `SubCategory`(`slug`) ON DELETE RESTRICT ON UPDATE CASCADE;
