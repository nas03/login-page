import { connectDatabase } from "@/util/connect-db";
import User from "@/schemas/User";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";

connectDatabase();

export async function GET(request) {

    console.log(request);
}
export async function POST(request) {
    const reqBody = await request.json();

    const { email, password } = reqBody;
    console.log(`${email} + ${password}`);
    const user = await User.findOne({ email });
    console.log(`User is: ${user}`);
    if (!user) {
        return Response.json({
            status: 400,
            message: "User does not exist",
            success: false
        })
    }
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword)
        return Response.json({
            status: 400,
            message: "Invalid password",
            success: false
        })

    const tokenData = {
        id: user._id,
        email: user.email
    }
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET);
    console.log("Log in successful");
    let response = NextResponse.json({
        status: 200,
        message: "Log in successful",
        success: true
    })
    response.cookies.set("token", token, "/dashboard")
    return response;


}