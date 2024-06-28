"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./input";
import { useRouter } from "next/navigation";
import SearchSuggestions from "./SearchSuggestions";
import { fetchAllPokemonsList } from "@/app/api/pokemon";
import { resolve } from "node:path/win32";

function SearchBar(props: any) {
  const [searchValue, setSearchvalue] = useState<string>("");
  const [pokemonData, setPokemonData] = useState<any>([]);
  const router = useRouter();
  const findPokemonSuggestions = (query: string): Promise<string[]> => {
    return new Promise((resolve) => {
      const matchingPokemons = props?.allPokemons
        ?.filter(({ name }: any) => name.includes(query.toLowerCase()))
        .map(({ name }: any) => name);
      // Artificial timeout for demonstration purposes
      setTimeout(() => {
        resolve(matchingPokemons);
      }, 200);
    });
  };
  const handleSearch = async (value: string) => {
    const getValue = await findPokemonSuggestions(value);
    setPokemonData(getValue);
  };
  return (
    <div className="sm:w-[75%] md:w-[60%] lg:w-[50%] xl:w-[50%] 2xl:w-[30%]">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <Input
          type="search"
          id="default-search"
          className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Pokemons"
          value={searchValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleSearch(event.target.value);
            setSearchvalue(event.target.value);
          }}
          required
        />
        <button
          type="submit"
          className="text-white h-full absolute end-0 bottom-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() =>
            searchValue
              ? router.push(`/${encodeURIComponent(searchValue)}`)
              : {}
          }
        >
          Search
        </button>
      </div>
      {pokemonData && (
        <SearchSuggestions
          searchValue={searchValue}
          pokemonData={pokemonData}
        />
      )}
    </div>
  );
}

export default SearchBar;
