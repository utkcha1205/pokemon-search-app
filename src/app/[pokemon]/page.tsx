import Loadmore from "@/components/ui/load-more";
import { fetchPokemonDetails } from "../api/pokemon";
import Pokemons from "@/components/ui/Pokemons";
import { GetStaticProps } from "next";
import { headers } from "next/headers";
import CardDetail from "@/components/ui/CardDetail";
import Link from "next/link";

export default async function Pokemondetail({
  params: { pokemon },
}: {
  params: { pokemon: string };
}) {
  const response = await fetchPokemonDetails(pokemon);
  return (
    <div className="container mx-auto h-[calc(100vh - 2rem)] max-w-5xl ">
      <div>
        <nav className="flex justify-start items-center h-[110px]">
          <ul className="flex space-x-2">
            <li>
              <a href="/" className="text-blue-600 hover:underline">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <span className="text-gray-500">PokemonName</span>
            </li>
          </ul>
        </nav>
        {/* <Link href={'/'}> {'<- Back'}</Link> */}
      </div>
      <div className="p-4">
        <CardDetail data={response} />
      </div>
    </div>
  );
}
