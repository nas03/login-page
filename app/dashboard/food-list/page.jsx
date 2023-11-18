// Importing necessary modules
import { useSession } from "next-auth/react";
import foodStyles from "./styles.module.css"; // Update this with the correct path to your CSS module
import mysql from "mysql2/promise";
import getConfig from "next/config";
import Image from "next/image";

const { serverRuntimeConfig } = getConfig();
const { host, port, user, password, database } = serverRuntimeConfig.mysql;

async function getQueryData(query) {
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
    database, // Add the database name here
  });

  try {
    await connection.query(`USE ${database}`);
    const [rows] = await connection.execute(query);
    connection.end();
    return rows;
  } catch (error) {
    console.error("Error fetching data:", error);
    connection.end();
    return [];
  }
}

const Category = ({ category }) => (
  <div className={foodStyles["category-container"]} key={category.id}>
    <p className={`${foodStyles["category-title"]} dark-gray text-3xl`}>
      {category.category}
    </p>
    <div className={`${foodStyles["category-food-container"]} dark-gray`}>
      {category.category && <Food category={category.category} />}
    </div>
  </div>
);

async function Food({ category }) {
  
  const data = await getQueryData(`SELECT * FROM food_category WHERE category = '${category}';`);

  return (
    <>
      {data.map((data) => (
        <FoodItem key={data.id} data={data} />
      ))}
    </>
  );
}

const FoodItem = ({ data }) => (
  <a href={`/dashboard/food-list/${data.food_type}`} className={`${foodStyles["food-category-container"]}`} key={data.id}>
    <Image
      className={`${foodStyles["food-thumbnail"]}`}
      src={data.image_url}
      alt={data.food_type}
      height={100}
      width={200}
    />
    <div className={`${foodStyles["food-category-content"]} dark-gray`}>
      <p className="">{data.food_type}</p>
      <p className="">{data.description}</p>
    </div>
  </a>
);

export default async function FoodList() {
  const data = await getQueryData(
    "SELECT * FROM food.display_category ORDER BY id ASC",
  );
  const categories = Array.from(data);

  return (
    <div className="w-full">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}
