import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import Content from "@/components/content";
import PokemonSearch from "@/components/pkmn/PokemonSearch";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-row justify-between ${inter.className}`}
    >
      <Sidebar
        userLevel={1}
        userName="ASHK123"
        userMotto="Work hard on your test"
      ></Sidebar>
      <div className="bg-white text-text w-full h-full">
        <Content componentProp={<PokemonSearch />} />
      </div>
    </div>
  );
}
