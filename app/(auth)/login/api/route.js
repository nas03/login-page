import { connectDatabase } from "@/util/connect-db";
import User from "@/schemas/User";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'
connectDatabase();

export async function GET(request) {

    console.log(request);
}
export async function POST(request) {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    const user = await User.findOne({ email });
    if (!user) {
        return Response.json({
            status: 400,
            message: "User does not exist"
        })
    }
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword)
        return Response.json({
            status: 400,
            message: "Invalid password"
        })

    const tokenData = {
        id: user._id,
        email: user.email
    }

    
}