import { NextRequest, NextResponse } from "next/server";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export function middleware(request: NextRequest) {
  const accessToken: RequestCookie | undefined =
    request.cookies.get("accessToken");

  if (!accessToken && request.nextUrl.pathname === "/history") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    accessToken &&
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/history"],
};
