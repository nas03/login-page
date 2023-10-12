import { NextRequest, NextResponse } from "next/server"
export function middleware(request) {
    
    const path = request.nextUrl.pathname
    const isPublicPath = path === '/login' || path === '/sign-up'
    const token = request.cookies.get('token').value;
    console.log("token", request.cookies.get('token').value);
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
}

export const config = {
    matcher: [
        '/',
        '/dashboard',
        '/sign-up',
        '/login'
    ]
}