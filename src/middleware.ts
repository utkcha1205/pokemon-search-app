import { NextResponse } from "next/server";
import { authMiddleware } from "../middlewares/apis/authMiddleware";
import { loggingMiddleware } from "../middlewares/apis/loggingMiddleware";

export const config = {
    matcher: "/api/:path*"
}

export function middleware(request:Request){

    if(request.url.includes("/api/notes")){
        const logResult = loggingMiddleware(request)
        console.log("logResult",logResult.response)
    }
    const authResult = authMiddleware(request)

    if(!authResult?.isValid){
        return new NextResponse(JSON.stringify({message: 'unauthorized'}), {status: 401})
    }
    return NextResponse.next()
}