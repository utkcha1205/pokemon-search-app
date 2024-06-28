"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Spinner from "./spinner";
import Pokemons from "./Pokemons";
import { fetchPokemons } from "@/app/api/pokemon";

const Loadmore = () => {
  const [pokemons, setPokemons] = useState<any>([]);
  const [offset, setoffset] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      loadMorePokemons();
    }
  }, [inView]);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMorePokemons = async () => {
    await delay(2000);
    const nextPage = offset + 20;
    const newPokemons = (await fetchPokemons(nextPage)) ?? [];
    setPokemons((prevProducts: any) => [...prevProducts, ...newPokemons]);
    setoffset(nextPage);
  };

  return (
    <>
      <Pokemons pokemons={pokemons} />
      <div
        className="col-span-1 flex items-center justify-center p-4 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <Spinner />
      </div>
    </>
  );
};

export default Loadmore;
