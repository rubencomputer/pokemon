import Sidebar from "./sidebar";
import SearchBar from "./shared/search-bar";
import { PokemonClient } from "pokenode-ts";
import { useState } from "react";
import { useMyContext } from "@/providers/PokeContext";
import { useRouter } from "next/router";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const Layout = ({ children }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
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
    } catch (e: any) {
      if (e.response.status === 404) {
        router.push("/404");
      }
    }
  };

  const isUserInDetails = () => {
    if (!router.asPath.split("/").includes("pkmn")) return <></>;

    return (
      <Button
        href="/"
        isIconOnly
        className="rounded-full bg-main text-white text-xl w-12 "
        size="md"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
    );
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
            <div className="flex flex-row w-full mb-6">
              <div className="justify-start pl-3">{isUserInDetails()}</div>
              <div className="ml-auto">
                <SearchBar
                  onDataFromChild={handleSearch}
                  onSubmitFromChild={handleSubmit}
                />
              </div>
            </div>
            <div className="text-black w-full h-full">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
