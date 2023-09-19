import { Inter } from "next/font/google";
import Sidebar from "./sidebar";
import SearchBar from "./shared/search-bar";
import { PokemonClient } from "pokenode-ts";
import { useState } from "react";
import useContext from "react";
import { useMyContext } from "@/providers/PokeContext";
import { useRouter } from "next/router";

export const Layout = ({ children }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonData, setPokemonData] = useState({});
  const router = useRouter();

  const { setData } = useMyContext();

  const handleSearch = (e: any): void => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e: any): Promise<any> => {
    const pokeApi = new PokemonClient();

    try {
      const response = await pokeApi.getPokemonByName(searchTerm.toLowerCase());
      console.log(response);
      setData([response]);
      // setPokemonData([response]);
    } catch (e: any) {
      if (e.response.status === 404) {
        router.push("/404");
      }
      // setPokemonData({});
    }
  };

  return (
    <>
      <div className={`flex min-h-screen flex-row justify-between`}>
        <Sidebar
          userLevel={1}
          userName="ASHK123"
          userMotto="Work hard on your test"
        ></Sidebar>
        <div className="bg-white text-text w-full h-screen bg-gradient-to-b from-gradientStart to-gradientEnd">
          <div className="flex flex-col h-full w-full justify-center items-center p-12 self-end place-self-end overflow-y-scroll">
            <div className="flex flex-row self-end mb-6">
              <SearchBar
                onDataFromChild={handleSearch}
                onSubmitFromChild={handleSubmit}
              />
            </div>
            <div className="text-black w-full h-full">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
