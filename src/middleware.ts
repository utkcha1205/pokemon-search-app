// import { NextRequest, NextResponse } from "next/server";
// import { authMiddleware } from "../middlewares/apis/authMiddleware";
// import { loggingMiddleware } from "../middlewares/apis/loggingMiddleware";
// import {getServerSession} from 'next-auth'

// export const config = {
//     matcher: "/api/:path*"
// }

// const protectedRoutes = ["/middlewareComp"]

// export async function  middleware(request:NextRequest){
//     const session = await getServerSession()

//     if(!session && protectedRoutes.includes(request.nextUrl.pathname)){
//         const abosulteUrl = new URL('/', request.nextUrl.origin)
//         return NextResponse.redirect(abosulteUrl.toString())
//     }
//     // if(request.url.includes("/api/notes")){
//     //     const logResult = loggingMiddleware(request)
//     //     console.log("logResult",logResult.response)
//     // }
//     // const authResult = authMiddleware(request)

//     // if(!authResult?.isValid){
//     //     return new NextResponse(JSON.stringify({message: 'unauthorized'}), {status: 401})
//     // }
//     const requestHeaders = new Headers(request.headers);
//   const response = NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   });
//   return response;
// }

//  Runnning middleware


import { NextRequest, NextResponse } from "next/server";
import { authMiddleware } from "../middlewares/apis/authMiddleware";
import { loggingMiddleware } from "../middlewares/apis/loggingMiddleware";
import { cookies } from "next/headers";

export const config = {
  matcher: ["/api", "/middlewareComp"],
};

const protectedRoutes = ["/middlewareComp"];

export async function middleware(request: NextRequest) {
    let token:any =  cookies()?.get('midToken');
    
  // Fetch the session once and await it if it is an async operation
//   const session = await getServerSession();
//   console.log(session,"seeeeeee")
  // Check if the session is missing and the route is protected
  if (!token?.value && protectedRoutes.includes(request.nextUrl.pathname)) {
    const absoluteUrl = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }

  // Perform logging if the request URL includes "/api/notes"
  if (request.url.includes("/api/notes")) {
    const logResult = loggingMiddleware(request);
    console.log("logResult", logResult.response);
  }

  // Check authentication validity using authMiddleware
  const authResult = authMiddleware(request);

  if (!authResult?.isValid) {
    // Return a response immediately if the user is not authorized
    return new NextResponse(JSON.stringify({ message: "unauthorized" }), {
      status: 401,
    });
  }

  // If no early return has occurred, proceed with the request
  return NextResponse.next();
}


// Using session middleware 

// import { NextResponse } from "next/server";
// import { authConfig } from "./auth.config";
// import NextAuth from "next-auth";

// // const { auth } = NextAuth(authConfig);

// import { LOGIN, ROOT, PROTECTED_SUB_ROUTES} from "@/lib/routes";

// export async function middleware(request:any) {
//     // console.log(auth(),"authhhhhhh")
//   const { nextUrl } = request;
// //   const session = await auth();
//   const isAuthenticated = true;
//   console.log(isAuthenticated, nextUrl.pathname);

//   const isPublicRoute = ( !PROTECTED_SUB_ROUTES.find(route => nextUrl.pathname.includes(route)));

//   console.log(isPublicRoute);

//   if (!isAuthenticated && !isPublicRoute)
//     return NextResponse.redirect(new URL(LOGIN, nextUrl));
// }

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)", '/middlewareComp']
// };