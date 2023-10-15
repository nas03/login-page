"use client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { signOut, useSession } from "next-auth/react";
export default function Button({ children, type }) {
  const { data: session } = useSession();

  if (type == "signOut") {
    signOut();
  }
  return <button>{children}</button>;
}
