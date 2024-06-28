"use server";

import { cookies } from "next/headers";

export async function fetchPokemons(offset: number, url?: string) {
  const limit = 20;
  let apiUrl;
  if (url) {
    apiUrl = `${url}`;
  } else {
    apiUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  }

  try {
    const response = await fetch(apiUrl);

    let data = await response.json();

    if (url && data?.pokemon) {
      data = data?.pokemon?.map((val: any) => ({
        name: val.pokemon.name,
        url: val.pokemon.url,
      }));
    }

    return url ? data : (data?.results as any);
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export async function fetchPokemonDetails(name: string) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data as any;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export async function fetchPokemonType(name: string) {
  const apiUrl = `https://pokeapi.co/api/v2/type/${name}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data as any;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export async function fetchAllPokemonsList(limit: number) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data as any;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
