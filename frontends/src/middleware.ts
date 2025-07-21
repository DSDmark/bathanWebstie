import { NextResponse, type NextRequest } from "next/server";
import { AUTH_ROUTE, PROTECTED_ROUTE, STORAGE_VALUES } from "./constants";

export function middleware(req: NextRequest) {
  const currentUserToken = req.cookies.get(STORAGE_VALUES.mainAuthToken)?.value;
  if (
    currentUserToken &&
    Object.values(AUTH_ROUTE).includes(req.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL(PROTECTED_ROUTE.dashboard, req.url));
  }

  if (
    !currentUserToken &&
    Object.values(PROTECTED_ROUTE).includes(req.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL(AUTH_ROUTE.login, req.url));
  }
}
