import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        let response = NextResponse.json({
            message: "Log out successfully",
            success: true
        })
        response.cookies.set(
            'token',
            '',
            {
                httpOnly: true,
                expires: new Date(0)
            }
        )
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            status: 500
        })
    }
}