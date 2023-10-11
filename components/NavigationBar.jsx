"use client";
import Link from "next/link";
export default function NavigationBar() {
  return (
    <>
      <ul className="flex flex-row gap-10 w-full bg-green-500">
      <li className="pb-5 pl-10 pr-10 pt-5 text-xl text-white hover:bg-slate-500">
          Obesity Controller
        </li>
        <li className="pb-5 pl-10 pr-10 pt-5 text-xl text-white hover:bg-slate-500">
          Home
        </li>
        <li className="pb-5 pl-10 pr-10 pt-5 text-xl text-white hover:bg-slate-500">
          Meals
        </li>
        <li className="pb-5 pl-10 pr-10 pt-5 text-xl text-white hover:bg-slate-500 ml-auto">
          <Link href="/login">Sign in</Link>
        </li>
      </ul>
    </>
  );
}
