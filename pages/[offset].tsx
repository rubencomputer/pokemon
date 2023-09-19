import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import PokemonSearch from "@/components/pkmn/PokemonSearch";
import { PokemonClient } from "pokenode-ts";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async (context: any) => {
  const { offset } = context.query;

  const startingPokemon = offset * 12;

  const pokemonData = await fetchPokemonData(startingPokemon);

  return {
    props: {
      pokemonData,
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
  if (offset >= count) {
    return 0;
  } else {
    return offset;
  }
};

export default function Home({ pokemonData, startingPokemon }: any) {
  return (
    <div
      className={`flex min-h-screen flex-row justify-between ${inter.className}`}
    >
      <Sidebar
        userLevel={1}
        userName="ASHK123"
        userMotto="Work hard on your test"
      ></Sidebar>
      <div className="bg-white text-text w-full h-screen bg-gradient-to-b from-gradientStart to-gradientEnd">
        <PokemonSearch pokemonData={pokemonData} />
      </div>
    </div>
  );
}
