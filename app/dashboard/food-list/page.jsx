// Importing necessary modules
import { useSession } from "next-auth/react";
import foodStyles from "./styles.module.css"; // Update this with the correct path to your CSS module

import Image from "next/image";
import * as Prisma from "@/prisma/PrismaServices";

const Category = ({ category }) => (
  <div className={foodStyles["category-container"]} key={category.id}>
    <p className={`${foodStyles["category-title"]} dark-gray text-3xl`}>
      {category.main_category}
    </p>
    <div className={`${foodStyles["category-food-container"]} dark-gray`}>
      {category.main_category && <Food category={category.main_category} />}
    </div>
  </div>
);

async function Food({ category }) {
  const data = await Prisma.getSubCategoriesByMainCategory(category);
  return (
    <>
      {data.map((data) => (
        <FoodItem key={data.id} data={data} />
      ))}
    </>
  );
}

const FoodItem = ({ data }) => (
  <a
    href={`/dashboard/food-list/${data.slug}`}
    className={`${foodStyles["food-category-container"]}`}
    key={data.id}
  >
    <Image
      className={`${foodStyles["food-thumbnail"]}`}
      src={`/images/${data.slug}.webp`}
      alt={data.slug}
      height={100}
      width={200}
    />
    <div className={`${foodStyles["food-category-content"]} dark-gray`}>
      <p className="">{data.sub_category}</p>
      <p className="">{data.description}</p>
    </div>
  </a>
);

export default async function FoodList() {
  const prisma = await Prisma.getMainCategories();

  return (
    <div className="w-full">
      {prisma.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}
