import { useSession } from "next-auth/react";
import "./food.css";
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

export default async function Dashboard() {
  const data = await getQueryData(
    "SELECT * FROM food.display_category ORDER BY id ASC",
  );
  const categories = Array.from(data);
  console.log(categories);
  return (
    <div>
      {categories.map((category) => (
        <div className="" key={category.id}>
          <p className="food-title text-3xl dark-gray">
            {category.category}
          </p>
          <div className="dark-gray relative left-1/2 flex w-11/12 -translate-x-1/2 flex-row flex-wrap justify-items-start">
            {category.category && <Food category={category.category} />}
          </div>
        </div>
      ))}
    </div>
  );
}

async function Food({ category }) {
  const query = `SELECT * FROM food_category WHERE category = '${category}';`;
  console.log(query);
  const datas = await getQueryData(query);
  const data = Array.from(datas);
  console.log(data);
  return (
    <>
      {data.map((data) => (
        <div
          className="food-category-container basis-1/3"
          key={data.id}
        >
          <Image
            className="food-thumbnail rounded-t-xl"
            src={data.image_url}
            alt={data.name}
            height={100}
            width={200}
          />
          <div className="food-category-content dark-gray">
            <p className="food-category-items dark-gray">{data.name}</p>
            <p className="dark-gray line-clamp-3">{data.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
