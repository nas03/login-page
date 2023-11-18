import mysql from "mysql2/promise";
import getConfig from "next/config";
import style from './styles.module.css'
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
export default async function FoodCategory({ params }) {
  console.log(params.food_type)
  const data = await getQueryData(
    `SELECT name
      FROM food_list
      WHERE food_type = 
      (SELECT food_type 
        FROM food_category 
        WHERE food_category.food_type = '${decodeURIComponent(
          params.food_type,
        )}'); `,
  );
  console.log(data);
  return (
    <>
      {data.map((food) => (
        <p key={food}>{food.name}</p>
      ))}
    </>
  );
}
