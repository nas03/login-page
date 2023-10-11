"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [failed, setFailed] = useState(false);
  async function submitHandler(formData) {
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      confirm: formData.get("confirm"),
    };
    const response = await axios.post("/sign-up/api", data);
    setFailed(response.data.fail);
  }
  return (
    <div className="flex flex-col justify-center w-1/4 border-2 border-black p-5 ml-auto mr-auto relative top-1/3 -translate-y-1/2 pl-7 pr-7">
      <Image
        src="/icon.svg"
        alt="icon"
        width={90}
        height={90}
        className="self-center"
      ></Image>
      <span className="self-center text-xl mt-2 mb-5">Obesity Controller</span>
      <form className="flex flex-col justify-center" action={submitHandler}>
        <input
          type="email"
          name="email"
          id="email"
          className="text-black border-2 border-slate-300 pl-5 pr-5 pt-2 pb-2  mb-5 text-sm"
          placeholder="Email"
        />

        <input
          type="password"
          name="password"
          id="password"
          className="text-black border-2 border-slate-300 pl-5 pr-5 pt-2 pb-2 mb-5 text-sm"
          placeholder="Password"
        />
        <input
          type="password"
          name="confirm"
          id="confirm"
          className="text-black border-2 border-slate-300 pl-5 pr-5 pt-2 pb-2 text-sm"
          placeholder="Confirm password"
        />
        <input
          type="submit"
          value="Sign up"
          className="mt-5 mb-3 bg-green-400 text-white pt-2 pb-2 pl-5 pr-5 hover:cursor-pointer"
        />
      </form>
      {failed && (
        <span className="text-red-500 text-center">Sign up failed</span>
      )}
      <span className="text-center">
        Have an account?{" "}
        <Link href="/login" className="text-green-500">
          Sign in
        </Link>
      </span>
    </div>
  );
}
