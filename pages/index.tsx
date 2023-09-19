import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import PokemonSearch from "@/components/pkmn/PokemonSearch";
import { PokemonClient } from "pokenode-ts";

const inter = Inter({ subsets: ["latin"] });

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

export default function Home({ detailedPokemonData }: any) {
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
        <PokemonSearch pokemonData={detailedPokemonData} />
      </div>
    </div>
  );
}
