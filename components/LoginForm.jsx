"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative ml-auto mr-auto mt-10 flex w-1/4 flex-col justify-center border-2 border-black p-5 pl-7 pr-7">
      <Image
        src="/icon.svg"
        alt="icon"
        width={90}
        height={90}
        className="self-center"
      ></Image>
      <span className="mt-2 self-center text-xl">Obesity Controller</span>
      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          className="mb-5 mt-5 border-2 border-slate-300 pb-2 pl-5 pr-5 pt-2 text-sm text-black"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          id="password"
          className="border-2 border-slate-300 pb-2 pl-5 pr-5 pt-2 text-sm text-black"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="mb-3 mt-5 bg-green-400 pb-2 pl-5 pr-5 pt-2 text-white hover:cursor-pointer">
          Sign in
        </button>
      </form>
      {error && (
        <div className="mt-2 w-fit rounded-md bg-red-500 px-3 py-1 text-sm text-white">
          {error}
        </div>
      )}

      <div className="flex flex-row">
        <Link
          href="/forgot-password"
          className="place-self-start text-sm text-green-400"
        >
          Forgot password?
        </Link>
        <Link className="ml-auto text-sm text-green-500" href="/sign-up">
          Sign up
        </Link>
      </div>
    </div>
  );
}
