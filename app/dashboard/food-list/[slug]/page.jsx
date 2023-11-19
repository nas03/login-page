import mysql from "mysql2/promise";
import getConfig from "next/config";
import * as Prisma from "@/prisma/PrismaServices";
import style from "./styles.module.css";
const { serverRuntimeConfig } = getConfig();
const { host, port, user, password, database } = serverRuntimeConfig.mysql;


export default async function FoodCategory({ params }) {
  const prisma = await Prisma.getFoodBySlug(decodeURIComponent(params.slug));
  return (
    <>
      {prisma.map((food) => (
        <p key={food.id}>{food.food}</p>
      ))}
    </>
  );
}
