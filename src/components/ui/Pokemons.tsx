import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const Pokemons = ({ pokemons }: any) => {
  return (
    <>
      {pokemons?.length ? (
        pokemons.map((element: { name: string}, index:number ) => (
          <Card className="rounded-[15px]" key={`${index} - ${element.name} `}>
            <div className="w-full flex justify-center p-2 h-[140px] bg-white">
              <Image
                src={`https://img.pokemondb.net/artwork/large/${element.name}.jpg`}
                alt={element.name}
                width={100}
                height={100}
                
                style={{
                  objectFit: "contain",
                  height: "revert-layer",
                  width: "100%",
                }}
              />
            </div>
            <div className="bg-gray-50 rounded-[15px]">
              <CardHeader className="pb-20">
                <CardTitle className="capitalize text-[18px]">
                  {element?.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Link className="text-[13px] text-blue-600" href={element.name}>
                  {"Details ->"}
                </Link>
              </CardContent>
            </div>
          </Card>
        ))
      ) : (
        <div className="text-xl font-bold text-center"> No More Pokemons available !! </div>
      )}
    </>
  );
};

export default Pokemons;
