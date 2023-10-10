import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/login">Login</Link>
      <Link href="/sign-up">Sign up</Link>
    </>
  );
}
