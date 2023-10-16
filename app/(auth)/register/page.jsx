"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

export default function Page() {
  const session = useSession();

  if (session) redirect("/dashboard");
  const router = useRouter();

  const [failed, setFailed] = useState("");

  async function submitHandler(formData) {
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      confirm: formData.get("confirm"),
    };

    const response = await axios.post("/api/register", data);
    console.log(response);
    setFailed(response.data.fail);
    if (response.data.message.length > 0) router.push("/");
  }
  return (
    <div className="relative ml-auto mr-auto mt-10 flex w-1/4 flex-col justify-center border-2 border-black p-5 pl-7 pr-7">
      <Image
        src="/icon.svg"
        alt="icon"
        width={90}
        height={90}
        className="self-center"
      ></Image>
      <span className="mb-5 mt-2 self-center text-xl">Obesity Controller</span>
      <form className="flex flex-col justify-center" action={submitHandler}>
        <input
          type="email"
          name="email"
          id="email"
          className="mb-5 border-2 border-slate-300 pb-2 pl-5 pr-5 pt-2  text-sm text-black"
          placeholder="Email"
        />

        <input
          type="password"
          name="password"
          id="password"
          className="mb-5 border-2 border-slate-300 pb-2 pl-5 pr-5 pt-2 text-sm text-black"
          placeholder="Password"
        />
        <input
          type="password"
          name="confirm"
          id="confirm"
          className="border-2 border-slate-300 pb-2 pl-5 pr-5 pt-2 text-sm text-black"
          placeholder="Confirm password"
        />
        <input
          type="submit"
          value="Sign up"
          className="mb-3 mt-5 bg-green-400 pb-2 pl-5 pr-5 pt-2 text-white hover:cursor-pointer"
        />
      </form>
      {failed.length > 0 && (
        <span className="text-center text-sm text-red-500">{failed}</span>
      )}
      <span className="text-center text-sm">
        Have an account?{" "}
        <Link href="/login" className="text-green-500">
          Sign in
        </Link>
      </span>
    </div>
  );
}
