"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"

export default function Page() {
  const router = useRouter();
  async function submitHandler(formData) {
    console.log(formData);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    try {
      const response = await axios.post("/login/api/", data);
      const resData = response.data;
      const { message, success } = resData;
      console.log(`${message}, ..., ${success}`);
      if (success) {
        
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
      <span className="mt-2 self-center text-xl">Obesity Controller</span>
      <form className="flex flex-col justify-center" action={submitHandler}>
        <input
          type="email"
          name="email"
          id="email"
          className="mb-5 mt-5 border-2 border-slate-300 pb-2 pl-5 pr-5 pt-2 text-sm text-black"
          placeholder="Email"
        />

        <input
          type="password"
          name="password"
          id="password"
          className="border-2 border-slate-300 pb-2 pl-5 pr-5 pt-2 text-sm text-black"
          placeholder="Password"
        />
        <input
          type="submit"
          value="Sign in"
          className="mb-3 mt-5 bg-green-400 pb-2 pl-5 pr-5 pt-2 text-white hover:cursor-pointer"
        />
      </form>

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
