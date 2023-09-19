import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import { PokemonClient } from "pokenode-ts";
import { useState } from "react";
import SearchBar from "@/components/shared/search-bar";
import PokemonList from "@/components/pkmn/PokemonList";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async (context: any) => {
  const { offset } = context.query;

  const startingPokemon = offset * 12;

  const detailedPokemonData = await fetchPokemonData(startingPokemon);

  return {
    props: {
      detailedPokemonData,
      startingPokemon,
    },
  };
};

const fetchPokemonData = async (offset = 0) => {
  const api = new PokemonClient();
  //revisamos si esta dentro del rango y mandamos el mismo cliente para ahorrarnos hacer otro.
  offset = await validateOffset(api, offset);
  const data = await api.listPokemons(offset, 12);

  const pokemonData = [];

  for (let pkmn of data.results) {
    pokemonData.push(await api.getPokemonByName(pkmn.name));
  }

  return pokemonData;
};

const validateOffset = async (client: PokemonClient, offset: number) => {
  //Trae la cuenta del ultimo posible pokemon
  const { count } = await client.listPokemons(1, 1);
  if (offset >= count || offset < 0) {
    return 0;
  } else {
    return offset;
  }
};

export default function Home({ detailedPokemonData, startingPokemon }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonData, setPokemonData] = useState(detailedPokemonData);

  console.log(detailedPokemonData);

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    const pokeApi = new PokemonClient();

    try {
      const response = await pokeApi.getPokemonByName(searchTerm.toLowerCase());
      setPokemonData([response]);
    } catch (e) {
      setPokemonData(detailedPokemonData);
    }
  };

  return (
    <div className="text-black w-full h-full">
      <PokemonList listData={pokemonData} />
    </div>
  );
}
