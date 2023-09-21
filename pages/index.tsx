import { Inter } from "next/font/google";
import SideBar from "@/components/SideBar";
import { PokemonClient } from "pokenode-ts";
import SearchBar from "@/components/SearchBar";
import PokemonList from "@/components/pokemon/PokemonList";
import { useState, useContext, useEffect } from "react";
import { useMyContext } from "@/providers/PokeContext";
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
  const api = new PokemonClient();

  const data = await api.listPokemons(0, 12);

  const detailedPokemonData = [];

  for (let pkmn of data.results) {
    detailedPokemonData.push(await api.getPokemonByName(pkmn.name));
  }

  return {
    props: {
      detailedPokemonData,
    },
  };
};

export default function Index({ detailedPokemonData }: any) {
  const { data, setData } = useMyContext();
  const router = useRouter();
  useEffect(() => {
    setData(detailedPokemonData);
  }, []);
  return (
    <div className="text-mainText w-full h-full">
      <PokemonList />
    </div>
  );
}
