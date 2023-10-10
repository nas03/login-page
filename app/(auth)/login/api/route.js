import { NextRequest } from "next/server";
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
    const {email, password}  = reqBody;
    const user = users.find((user) => user.email === email)
    console.log(user);
    if (user.password === password) {
        return Response.json({ status: 200, authenticate: true });
    }
    return Response.json({ status: 200, authenticate: false });

}