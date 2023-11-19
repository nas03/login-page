import mysql from "mysql2/promise";
import getConfig from "next/config";
import * as Prisma from "@/prisma/PrismaServices";
import { cache } from "react";
import style from "./styles.module.css";
export const revalidate = 3600;
export default async function FoodCategory({ params }) {
  const prismaData = await Prisma.getFoodBySlug(decodeURIComponent(params.slug));
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Food</th>
            <th>Serving</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {prismaData.map((food) => (
            <>
              <tr>
                <td key={food.id}>{food.food}</td>
                <td>100g</td>
                <td key={food.id}>{food.calories}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
}
