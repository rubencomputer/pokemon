import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import { PokemonClient } from "pokenode-ts";
import PokemonDetails from "@/components/pkmn/PokemonDetails";

const inter = Inter({ subsets: ["latin"] });

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

export default function Home({ pokemonData }: any) {
  console.log(pokemonData);
  return <PokemonDetails pokemonData={pokemonData} />;
}
