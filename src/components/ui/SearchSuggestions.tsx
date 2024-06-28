import { fetchAllPokemonsList } from "@/app/api/pokemon";
import Link from "next/link";
import React from "react";

function SearchSuggestions({ searchValue, pokemonData }: any) {
  return (
    <div
      style={{
        padding: "4px",
        width: "280px",
      }}
    >
      <ul
        style={{
          maxHeight: "200px",
          overflow: "scroll",
          position: "absolute",
          width: "inherit",
          top: "120px",
          zIndex: 1,
          display: "block",
          outline: "1px solid #f1f1f1",
        }}
      >
        <li
          style={{
            width: "inherit",
            backgroundColor: "#fff",
            fontSize: "14px",
            color: "grey",
          }}
        >
          {pokemonData &&
            pokemonData.map((item: string) => {
              return (
                <Link
                  href={`/${encodeURIComponent(item)}`}
                  className="suggestions"
                  style={{
                    padding: "10px",
                    display: "block",
                    width: "inherit",
                  }}
                >
                  {item}
                </Link>
              );
            })}
        </li>
      </ul>
    </div>
  );
}

export default SearchSuggestions;
