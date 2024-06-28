import Loadmore from "@/components/ui/load-more";
import {
  fetchPokemonType,
  fetchPokemons,
  fetchAllPokemonsList,
} from "./api/pokemon";
import Pokemons from "@/components/ui/Pokemons";
import SearchBar from "@/components/ui/SearchBar";
import PokemonTypes from "@/components/ui/PokemonTypes";
import { cookies } from "next/headers";

export default async function Home() {
  let valueType = cookies().get("type")?.value;
  const response = await fetchPokemons(0, valueType);
  const pokemonTypes = await fetchPokemonType("");
  const pokemonAllList = await fetchAllPokemonsList(response?.count);

  return (
    <div className="container mx-auto h-[calc(100vh - 2rem)] max-w-5xl px-4 py-8">
      <div className="flex flex-col gap-4">
        <PokemonTypes types={pokemonTypes?.results} />
        <SearchBar
          count={response?.count || 1}
          allPokemons={pokemonAllList?.results}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-5">
        <Pokemons pokemons={response || []} />
        <Loadmore />
      </div>
    </div>
  );
}
