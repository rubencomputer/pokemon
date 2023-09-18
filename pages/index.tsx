import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import Content from "@/components/content";
import PokemonSearch from "@/components/pkmn/PokemonSearch";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=12&offset=0`
  );
  const data = await res.json();

  // const pkmnArray =

  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }: any) {
  console.log(data);
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
        <PokemonSearch pokemonData={data} />
      </div>
    </div>
  );
}
