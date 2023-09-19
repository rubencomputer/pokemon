import { useState } from "react";
import SearchBar from "../shared/search-bar";
import PokemonList from "./PokemonList";
import { NextPage } from "next";

type PokemonSectionProps = {
  pokemonData: any;
};

const PokemonSearch = ({ pokemonData }: PokemonSectionProps) => {
  // console.log(pokemonData);
  return (
    <>
      <div className="flex flex-col h-full w-full justify-center items-center p-12 self-end place-self-end overflow-y-scroll">
        <div className="flex flex-row self-end mb-6">
          <SearchBar />
        </div>
        <div className="text-black w-full h-full">
          <PokemonList listData={pokemonData} />
        </div>
      </div>
    </>
  );
};

export default PokemonSearch;
