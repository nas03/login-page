import { NextRequest } from "next/server";
import { connectDatabase } from "@/util/connect-db";
const users = [
    {
        email: "sonanhnguyen003@gmail.com",
        password: "1234"
    }
]
export async function GET(request) {

    console.log(request);
}
export async function POST(request) {
    const reqBody = await request.json();
    let authenticated = false;
    const { email, password } = reqBody;
    const user = users.find((user) => user.email === email)
    if (user != undefined) {
        if (user.password === password)
            authenticated = true;
    }
    return Response.json({ status: 200, authenticate: authenticated });

}