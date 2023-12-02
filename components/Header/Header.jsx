"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { signOut, useSession } from "next-auth/react";
import { sign } from "jsonwebtoken";

export default function Header() {
  const { data: session } = useSession();
  return (
    <div className={`${styles.header} sticky inset-x-0 top-0`}>
      <div className={styles["nav-bar"]}>
        <div className={styles.logo}>
          <Image src="/svg/logo/logo.svg" width={34} height={34} alt="logo" />
          <Image
            src="/svg/logo/logo-name.svg"
            width={196}
            height={12}
            alt="logo-name"
          />
        </div>
        <div className={styles.container}>
          <ul className={styles["buttons-container"]}>
            <li>
              <Link href="/dashboard/home">Home</Link>
            </li>
            <li>
              <Link href="/dashboard/about">About</Link>
            </li>
            <li>
              <Link href="/dashboard/food">Food</Link>
            </li>
            {session && (
              <li>
                <Link href={"/user/generator"}>Generator</Link>
              </li>
            )}
          </ul>
          {!session ? (
            <button className={styles["session-btn"]}>
              <Link href="/auth/login">Sign in</Link>
            </button>
          ) : (
            <button
              className={styles["session-btn"]}
              onClick={() => {
                signOut();
                console.log("Sign out", session);
              }}
            >
              Sign out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
