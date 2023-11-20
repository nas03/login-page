import { PrismaClient } from "./generated/client";
import { cache } from "react";

export const revalidate = 3600;

const prisma = new PrismaClient();

// Main Categories
export const createMainCategory = async (mainCategoryName) => {
  try {
    return await prisma.mainCategory.create({
      data: {
        main_category: mainCategoryName,
      },
    });
    cleanup();
  } catch (error) {
    console.error("Error creating main category:", error);
    throw error;
  }
};

export const getMainCategories = cache(async () => {
  try {
    return await prisma.mainCategory.findMany({
      orderBy: {
        id: "asc",
      },
    });
    cleanup();
  } catch (error) {
    console.error("Error fetching main categories:", error);
    throw error;
  }
});

export const updateMainCategory = async (id, mainCategoryName) => {
  try {
    return await prisma.mainCategory.update({
      where: { id },
      data: {
        main_category: mainCategoryName,
      },
    });
    cleanup();
  } catch (error) {
    console.error("Error updating main category:", error);
    throw error;
  }
};

export const deleteMainCategory = async (id) => {
  try {
    return await prisma.mainCategory.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Error deleting main category:", error);
    throw error;
  }
};

// Subcategories
export const createSubCategory = async (
  mainCategoryId,
  subCategoryName,
  description,
  slug,
) => {
  try {
    return await prisma.subCategory.create({
      data: {
        mainCategoryId,
        sub_category: subCategoryName,
        description,
        slug,
      },
    });
  } catch (error) {
    console.error("Error creating subcategory:", error);
    throw error;
  }
};

export const getSubCategoriesByMainCategory = cache(async (category) => {
  try {
    return await prisma.subCategory.findMany({
      where: {
        main_category: category,
      },
    });
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    throw error;
  }
});

export const updateSubCategory = async (
  id,
  subCategoryName,
  description,
  slug,
) => {
  try {
    return await prisma.subCategory.update({
      where: { id },
      data: {
        sub_category: subCategoryName,
        description,
        slug,
      },
    });
  } catch (error) {
    console.error("Error updating subcategory:", error);
    throw error;
  }
};

export const deleteSubCategory = async (id) => {
  try {
    return await prisma.subCategory.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Error deleting subcategory:", error);
    throw error;
  }
};

// Foods
export const createFood = async (subCategoryId, foodName, calories, slug) => {
  try {
    return await prisma.food.create({
      data: {
        subCategoryId,
        food: foodName,
        calories,
        slug,
      },
    });
  } catch (error) {
    console.error("Error creating food:", error);
    throw error;
  }
};

export const getFoodBySlug = cache(async (slug) => {
  try {
    return await prisma.food.findMany({
      where: {
        slug: {
          equals: decodeURIComponent(slug),
        },
      },
      select: {
        food: true,
        calories: true,
      },
    });
  } catch (error) {
    console.error("Error fetching food by slug:", error);
    throw error;
  }
});

export const updateFood = async (id, foodName, calories, slug) => {
  try {
    return await prisma.food.update({
      where: { id },
      data: {
        food: foodName,
        calories,
        slug,
      },
    });
  } catch (error) {
    console.error("Error updating food:", error);
    throw error;
  }
};

export const deleteFood = async (id) => {
  try {
    return await prisma.food.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Error deleting food:", error);
    throw error;
  }
};

export const getSubcategoryBySlug = async (slug) => {
  try {
    return await prisma.subCategory.findFirst({
      where: {
        slug: {
          equals: slug,
        },
      },
      select: {
        sub_category: true,
        description: true,
      },
    });
  } catch (error) {
    console.error("Error get subCategory by slug", error);
    throw error;
  }
};
// Cleanup
export const cleanup = async () => {
  try {
    await prisma.$disconnect();
  } catch (error) {
    console.error("Error disconnecting from Prisma:", error);
    throw error;
  }
};
