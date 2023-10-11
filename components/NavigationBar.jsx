"use client";
import Link from "next/link";
import Image from "next/image";
export default function NavigationBar() {
  return (
    <>
      <ul className="flex flex-row gap-10 w-full max-h-15 bg-green-500 items-center">
        <li className="pb-5 pl-10 pr-10 pt-5 text-xl text-white hover:bg-slate-500">
          <Image
            src="/icon.svg"
            alt="icon"
            width={32}
            height={32}
            className="inline mr-2"
          ></Image>
          Obesity Controller
        </li>
        <li className="pb-5 pl-10 pr-10 pt-5 text-xl text-white hover:bg-slate-500  ">
          Home
        </li>
        <li className="pb-5 pl-10 pr-10 pt-5 text-xl text-white hover:bg-slate-500">
          Meals
        </li>
        <li className="pb-5 pl-10 pr-10 pt-5 text-xl text-white hover:bg-slate-500">
          Question
        </li>
        <li className="pb-5 pl-10 pr-10 pt-5 text-xl text-white hover:bg-slate-500 ml-auto">
          <Link href="/login">Sign in</Link>
        </li>
      </ul>
    </>
  );
}
