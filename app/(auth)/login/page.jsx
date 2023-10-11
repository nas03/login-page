"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
async function submitHandler(formData) {
  console.log(formData);
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    const response = await axios.post("/login/api/", data);
    console.log("Response data:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default function Page() {
  return (
    <div className="flex flex-col justify-center w-1/4 border-2 border-black p-5 ml-auto mr-auto relative top-1/3 -translate-y-1/2 pl-7 pr-7">
      <Image src="/icon.svg" alt="icon" width={90} height={90} className="self-center"></Image>
      <span className="self-center text-xl mt-2">Obesity Controller</span>
      <form className="flex flex-col justify-center" action={submitHandler}>
        <input
          type="email"
          name="email"
          id="email"
          className="text-black border-2 border-slate-300 pl-5 pr-5 pt-2 pb-2 mt-5 mb-5 text-sm"
          placeholder="Email"
        />

        <input
          type="password"
          name="password"
          id="password"
          className="text-black border-2 border-slate-300 pl-5 pr-5 pt-2 pb-2 text-sm"
          placeholder="Password"
        />
        <input type="submit" value="Sign in" className="mt-5 mb-3 bg-green-400 text-white pt-2 pb-2 pl-5 pr-5 hover:cursor-pointer" />
      </form>
      
      <div className="flex-row flex">
        <Link href="/forgot-password" className="text-green-400 place-self-start text-sm">
          Forgot password?
        </Link>
        <Link className="text-green-500 ml-auto text-sm" href="/sign-up">
          Sign up
        </Link>
      </div>
    </div>
  );
}
