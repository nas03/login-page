"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginForm() {
  return (
    <>
      
      <div className={`${styles["login-form"]} rounded-md pb-3`}>
        <Image
          src="/svg//logo/logo.svg"
          alt="icon"
          width={50}
          height={50}
          className="self-center pb-5 pt-3"
        />
        <Image
          className="scale-125 self-center pb-3"
          src="/svg/logo/dark-logo-name.svg"
          width={108}
          height={14}
          alt="logo-name"
        />
        <form className="flex flex-col items-center justify-center">
          <input
            type="number"
            name="text"
            className=" mt-5 w-10/12 rounded-md border-2 border-slate-300 pb-2 pl-5 pr-5 pt-2 text-sm text-black"
            placeholder="Blood Cholesterol Level"
          />
          <input
            type="number"
            name="text"
            className=" mt-5 w-10/12 rounded-md border-2 border-slate-300 pb-2 pl-5 pr-5 pt-2 text-sm text-black"
            placeholder="Average Calories per Day"
          />
          <input
            type="number"
            name="text"
            className=" mt-5 w-10/12 rounded-md border-2 border-slate-300 pb-2 pl-5 pr-5 pt-2 text-sm text-black"
            placeholder="Weight Target"
          />
          <input
            type="number"
            name="text"
            className=" mb-4 mt-5 w-10/12 rounded-md border-2 border-slate-300 pb-2 pl-5 pr-5 pt-2 text-sm text-black"
            placeholder="Calories per Day Target"
          />

          <button
            className="mb-3 mt-5  rounded-md pb-3 pl-5 pr-5 pt-3 hover:cursor-pointer"
            style={{
              background: "var(--dark-green-20, #234338)",
              color: "var(--green-97, #FAFDF2) !important",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
