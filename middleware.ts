import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("x-test", "HALLO");
  return response;
}
