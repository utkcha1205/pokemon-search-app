"use server";
import { cookies } from "next/headers";
import { signOut } from "next-auth/react";

export async function handlePokemonType(value: any) {
  if (value) {
    cookies().set("type", value);
  } else {
    cookies().delete("type");
  }
  // ...
}


