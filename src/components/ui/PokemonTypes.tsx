"use client";
import { handlePokemonType } from "@/app/actions";
import { cookies } from "next/headers";
import React, { useEffect } from "react";

function PokemonTypes({ types, ...props }: any) {
  useEffect(() => {
    handlePokemonType("");
  }, []);
  return (
    <div>
      <select
        id="pokemonType"
        aria-placeholder="Type"
        defaultValue={"Select a type"} // Use defaultValue for initial selection
        className="w-[370px] h-[45px]  rounded-sm shadow-sm  sm:text-sm px-2"
        style={{ border: "1px solid lightgray" }}
        onChange={(e) => handlePokemonType(e.target.value)}
      >
        <option value="">Select a type</option>
        {/* Add more options as needed */}
        {types &&
          types.map((val: any, index: any) => (
            <option key={index} value={val.url}>
              {val.name}
            </option>
          ))}
      </select>
    </div>
  );
}

export default PokemonTypes;
