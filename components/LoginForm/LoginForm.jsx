"use client";
import styles from "./styles.module.css";
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

      router.replace("dashboard/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles["login-form"]}>
      <Image
        src="/svg/logo.svg"
        alt="icon"
        width={50}
        height={50}
        className="self-center pb-5 pt-3"
      />
      <Image
        className="scale-125 self-center pb-3"
        src="/svg/dark-logo-name.svg"
        width={108}
        height={14}
        alt="logo-name"
      />
      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          className="mb-5 ml-3 mt-5 w-10/12 border-2 border-slate-300 pb-2 pl-5 pr-5 pt-2 text-sm text-black"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          id="password"
          className="ml-3 w-10/12 border-2 border-slate-300 pb-2 pl-5 pr-5 pt-2 text-sm text-black"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="mb-3 mt-5 pb-2 pl-5 pr-5 pt-2 hover:cursor-pointer"
          style={{
            background: "var(--dark-green-20, #234338)",
            color: "var(--green-97, #FAFDF2) !important",
          }}
        >
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
          className="place-self-start text-sm "
          style={{
            color: "var(--dark-green-20, #234338)",
          }}
        >
          Forgot password?
        </Link>
        <Link
          className="ml-auto text-sm "
          href="/auth/register"
          style={{
            color: "var(--dark-green-20, #234338)",
          }}
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
