import { LoginForm } from "@/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard/home");

  return (
    <div>
      <LoginForm />
    </div>
  );
}
