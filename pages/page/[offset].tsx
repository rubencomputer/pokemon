import { PokemonClient } from "pokenode-ts";
import { useEffect, useState } from "react";
import PokemonList from "@/components/pokemon/PokemonList";
import { useMyContext } from "@/providers/PokeContext";

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
const fetchPokemonData = async (offset: number = 0) => {
  const api = new PokemonClient();
  offset = await validateOffset(api, offset);
  const data = await api.listPokemons(offset, 12);

  const pokemonData = [];

  for (let pkmn of data.results) {
    try {
      const response = await api.getPokemonByName(pkmn.name);
      pokemonData.push(response);
    } catch (e: any) {
      throw new Error(e);
    }
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
