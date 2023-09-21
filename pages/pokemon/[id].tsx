import { Pokemon, PokemonClient } from "pokenode-ts";
import PokemonDetails from "@/components/pokemon/PokemonDetails";
import { NextPage } from "next";

export const getServerSideProps = async (context: any) => {
  const { id } = context.query;

  const pokeApi = new PokemonClient();
  const pokemonData = await pokeApi.getPokemonById(id);

  return {
    props: {
      pokemonData,
    },
  };
};

export const PokemonId: NextPage<any> = ({ pokemonData }) => {
  return <PokemonDetails pokemonData={pokemonData} />;
};

export default PokemonId;
