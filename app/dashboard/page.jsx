import { useSession } from "next-auth/react";
import './dashboard.css'
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
  });
  connection.query(`USE ${database}`);

  try {
    const rows = await connection.execute(query);
    connection.end();
    return rows[0];
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
  const category = Array.from(data.values());

  return (
    <div>
      {data.map((data) => (
        <div className="" key={data.id}>
          <p className=" relative left-1/2 w-11/12 -translate-x-1/2 text-3xl font-bold">{data.category}</p>
          <div className="relative left-1/2 flex w-11/12 -translate-x-1/2 flex-row flex-wrap justify-items-start">
            {data.category && <Food category={data.category} />}
          </div>
        </div>
      ))}
    </div>
  );
}

async function Food({ category }) {
  const data = await getQueryData(
    `SELECT * FROM food.food_category WHERE food_category.category = "${category}"`,
  );

  return (
    <>
      {data.map((data) => (
        <div
          className="flex grow-0 basis-1/3 flex-col pl-9 pt-10 "
          key={data.id}
        >
          <Image
            className="h-full w-full rounded-t-xl"
            src={data.image_url}
            alt={data.name}
            height={100}
            width={200}
          />
          <div className="max-h-44 rounded-b-xl border-b-2 border-l-2 border-r-2 p-4 ">
            <p className="pb-3 pt-3 text-2xl font-bold">{data.name}</p>
            <p className="line-clamp-3 text-slate-500">{data.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
