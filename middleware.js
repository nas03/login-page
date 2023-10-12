import { NextRequest, NextResponse } from "next/server"
export function middleware(request) {
    request = new NextRequest(request);
    const path = request.nextUrl.pathname
    const isPublicPath = path === '/login' || path === '/sign-up'
    const token = request.cookies.get('token');
    console.log("token", token);
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
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