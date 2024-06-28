"use server";
import { cookies } from "next/headers";
export async function handlePokemonType(value: any) {
  if (value) {
    cookies().set("type", value);
  } else {
    cookies().delete("type");
  }
  // ...
}
