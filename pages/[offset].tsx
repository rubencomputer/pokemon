import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import { PokemonClient } from "pokenode-ts";
import { useEffect, useState } from "react";
import SearchBar from "@/components/shared/search-bar";
import PokemonList from "@/components/pkmn/PokemonList";
import { useMyContext } from "@/providers/PokeContext";
import useContext from "react";
import { useRouter } from "next/router";
import { off } from "process";

export const getServerSideProps = async (context: any) => {
  const { offset } = context.query;

  const startingPokemon = offset * 12;

  const detailedPokemonData = await fetchPokemonData(startingPokemon);

  return {
    props: {
      detailedPokemonData,
    },
  };
};

//trae la data de los pokemones con el offset que queremos, que es la variable de la ruta.
const fetchPokemonData = async (offset = 0) => {
  const api = new PokemonClient();
  offset = await validateOffset(api, offset);
  const data = await api.listPokemons(offset, 12);

  const pokemonData = [];

  for (let pkmn of data.results) {
    pokemonData.push(await api.getPokemonByName(pkmn.name));
  }

  return pokemonData;
};

//Revisamos si el offset del api es valido y usamos el mismo cliente para revisar cuantos pokemones hay.
const validateOffset = async (client: PokemonClient, offset: number) => {
  const { count } = await client.listPokemons(1, 1);
  if (offset >= count || offset < 0) {
    return 0;
  } else {
    return offset;
  }
};

export default function Home({ detailedPokemonData }: any) {
  //cargamos el context para regresarle los nuevos poke con el offset de la ruta.
  const { setData } = useMyContext();

  useEffect(() => {
    setData(detailedPokemonData);
  }, []);

  return (
    <div className="text-black w-full h-full">
      <PokemonList />
    </div>
  );
}
