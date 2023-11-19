// PrismaServices.js
import { PrismaClient } from "./generated/client";

const prisma = new PrismaClient();

// Main Categories
export async function createMainCategory(mainCategoryName) {
  return prisma.mainCategory.create({
    data: {
      main_category: mainCategoryName,
    },
  });
}

export async function getMainCategories() {
  return prisma.mainCategory.findMany({
    orderBy: {
      id: "asc",
    },
  });
}

export async function updateMainCategory(id, mainCategoryName) {
  return prisma.mainCategory.update({
    where: { id },
    data: {
      main_category: mainCategoryName,
    },
  });
}

export async function deleteMainCategory(id) {
  return prisma.mainCategory.delete({
    where: { id },
  });
}

// Subcategories
export async function createSubCategory(mainCategoryId, subCategoryName, description, slug) {
  return prisma.subCategory.create({
    data: {
      mainCategoryId,
      sub_category: subCategoryName,
      description,
      slug,
    },
  });
}

export async function getSubCategoriesByMainCategory(category) {
  return prisma.subCategory.findMany({
    where: {
      main_category: category,
    },
  });
}

export async function updateSubCategory(id, subCategoryName, description, slug) {
  return prisma.subCategory.update({
    where: { id },
    data: {
      sub_category: subCategoryName,
      description,
      slug,
    },
  });
}

export async function deleteSubCategory(id) {
  return prisma.subCategory.delete({
    where: { id },
  });
}

// Foods
export async function createFood(subCategoryId, foodName, calories, slug) {
  return prisma.food.create({
    data: {
      subCategoryId,
      food: foodName,
      calories,
      slug,
    },
  });
}

export async function getFoodBySlug(slug) {
  return prisma.food.findMany({
    where: {
      slug: {
        equals: decodeURIComponent(slug),
      },
    },
    select: {
      food: true,
    },
  });
}

export async function updateFood(id, foodName, calories, slug) {
  return prisma.food.update({
    where: { id },
    data: {
      food: foodName,
      calories,
      slug,
    },
  });
}

export async function deleteFood(id) {
  return prisma.food.delete({
    where: { id },
  });
}

// Cleanup
export async function cleanup() {
  await prisma.$disconnect();
}
