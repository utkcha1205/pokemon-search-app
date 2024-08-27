"use client"

import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function NavBar() {
  const { data: session }: any = useSession();

  return (
    <div>
      <ul className="flex justify-between m-10 item-center">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>
        <div className="flex gap-10">
          <Link href="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link href="/middlewareComp">
            <li>Test</li>
          </Link>
          {!session ? (
            <>
              <Link href="/login">
                <li>Login</li>
              </Link>
              <Link href="/register">
                <li>Register</li>
              </Link>
            </>
          ) : (
            <>
              {session?.user?.email}
              <li>
                <button  onClick={() => signOut({ callbackUrl: 'http://localhost:8080' })} className="p-2 px-5 bg-blue-800 rounded-full text-white" >signOut</button>
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
