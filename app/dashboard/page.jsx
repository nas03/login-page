import { useSession } from "next-auth/react";
import mysql from "mysql2/promise";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();
const { host, port, user, password, database } = serverRuntimeConfig.mysql;

async function getQueryData(query) {
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
  });
  connection.query(`USE ${database}`);

  try {
    const rows = await connection.execute("SELECT * FROM food.food_category");
    return rows[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Dashboard() {
  const data = await getQueryData("SELECT * FROM food.food_category");

  return (
    <div>
      {data.map((data) => (
        <div key={data.id}>
          <p>Category: {data.category}</p>
          <p>Name: {data.name}</p>
          <p>Display: {data.display}</p>
          <p>Image URL: {data.image_url}</p>
        </div>
      ))}
    </div>
  );
}
