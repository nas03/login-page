"use client";
import "./header.css";
import Link from "next/link";
import Image from "next/image";

import { signOut, useSession } from "next-auth/react";
import { sign } from "jsonwebtoken";

export default function Header() {
  const { data: session } = useSession();
  return (
    <>
      <div className="header">
        <div className="top-banner">
          <div className="container">
            <Image
              className="icon"
              src="/svg/abstract.svg"
              alt="ico"
              width={146}
              height={20}
            />
            <Image
              className="icon"
              src="/svg/abstract1.svg"
              alt="ico"
              width={146}
              height={20}
            />
          </div>
        </div>
        <div className="nav-bar">
          <div className="logo">
            <Image src="/svg/logo.svg" width={34} height={34} alt="logo" />
            <Image
              src="/svg/logo-name.svg"
              width={196}
              height={12}
              alt="logo-name"
            />
          </div>
          <div className="container">
            <ul className="buttons-container">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Food</Link>
              </li>
            </ul>
            {!session ? (
              <button className="session-btn">
                <Link href="/">Sign in</Link>
              </button>
            ) : (
              <button
                className="session-btn"
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
    </>
  );
}
