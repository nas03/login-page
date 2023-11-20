import getConfig from "next/config";
import * as Prisma from "@/prisma/PrismaServices";
import { cache } from "react";
import style from "./styles.module.css";

export const revalidate = 3600;

export default async function FoodCategory({ params: { slug } }) {
  const prismaData = await Prisma.getFoodBySlug(decodeURIComponent(slug));
  const subCategory = await Prisma.getSubcategoryBySlug(slug);
  return (
    <>
      <div className={`${style["container"]}`}>
        <div className={style.title}>
          <h1 className={`${style["sub-category"]}`}>
            {subCategory.sub_category}
          </h1>
          <p className={`${style.description}`}>{subCategory.description}</p>
        </div>
        <div className={`${style.gridContainer}`}>
          <div className={`${style.gridHeader} ${style.gridRow}`}>
            <div className={`${style["first-col"]} ${style["data-container"]}`}>
              <p>Food</p>
            </div>
            <div
              className={`${style["second-col"]} ${style["data-container"]}`}
            >
              <p>Serving</p>
            </div>
            <div className={`${style["third-col"]} ${style["data-container"]}`}>
              <p>Calories</p>
            </div>
          </div>
          <div className={`${style.gridBody}`}>
            {prismaData.map((food) => (
              <div key={food.id} className={`${style.gridRow}`}>
                <div className={`${style["first-col"]}`}>
                  <p>{food.food}</p>
                </div>
                <div className={`${style["second-col"]}`}>
                  <p>100g</p>
                </div>
                <div className={`${style["third-col"]}`}>
                  <p>{food.calories}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
