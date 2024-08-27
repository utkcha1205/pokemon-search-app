"use client";
import {signIn, useSession} from 'next-auth/react'
import { useEffect, useLayoutEffect } from "react";
import { redirect, useRouter } from "next/navigation";



export default function withAuth(Component:any){
    return function withAuth(props:any){
        const router = useRouter()
        const {data:session, status:sessionStatus} = useSession();

       useEffect(() => {
        if(sessionStatus === 'authenticated'){
            router.replace('/')
        }
       },[sessionStatus])

       if(sessionStatus === "loading"){
        return <div>Loading...</div>
       }

       if(sessionStatus !== 'authenticated'){
        return <Component {...props} />
       }
       
    }
}