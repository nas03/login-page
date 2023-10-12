"use client";
import Link from "next/link";
import Image from "next/image";
export default function NavigationBar() {
  console.log("NavBar refresh")
  return (
    <>
      <ul className="max-h-15 flex w-full flex-row items-center gap-10 bg-green-500">
        <li className="pb-5 pr-10 pt-5 text-xl text-white hover:bg-slate-500">
          <Image
            src="/icon.svg"
            alt="icon"
            width={32}
            height={32}
            className="mr-2 inline"
          ></Image>
          Obesity Controller
        </li>
        <li className="pb-5  pt-5 text-xl text-white hover:bg-slate-500  ">
          Home
        </li>
        <li className="pb-5  pt-5 text-xl text-white hover:bg-slate-500">
          Meals
        </li>
        <li className="pb-5  pt-5 text-xl text-white hover:bg-slate-500">
          Question
        </li>
        <li className="ml-auto mr-10 pb-5 pt-5 text-xl text-white hover:bg-slate-500">
          <Link href="/login">Sign in</Link>
        </li>
      </ul>
    </>
  );
}
