import Sidebar from "./sidebar";
import SearchBar from "./shared/search-bar";
import { PokemonClient } from "pokenode-ts";
import { useState } from "react";
import { useMyContext } from "@/providers/PokeContext";
import { useRouter } from "next/router";
import { Button, Link } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { PageActionEnum } from "@/enums";

export const Layout = ({ children }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const { setData } = useMyContext();

  let currentPage: any = router.query.offset;

  if (!currentPage) {
    currentPage = 0;
  }

  //esta funcion revisamos lo que escribe el usuario
  const handleSearch = (e: any): void => {
    setSearchTerm(e.target.value);
  };

  //para el click al botón de busqueda o al dar enter.
  const handleSubmit = async (e: any) => {
    const pokeApi = new PokemonClient();

    try {
      if (isNaN(Number(searchTerm))) {
        const response = await pokeApi.getPokemonByName(
          searchTerm.toLowerCase()
        );
        console.log(response);
        setData([response]);
      } else {
        const response = await pokeApi.getPokemonById(Number(searchTerm));
        console.log(response);
        setData([response]);
      }
    } catch (e: any) {
      if (e.response.status === 404) {
        router.push("/404");
      }
    }
  };

  //revisamos si el usuario esta en detalles o en 404 para mostrar el boton de back.
  const backButtonCheck = () => {
    if (
      router.asPath.split("/").includes("pkmn") ||
      router.asPath.split("/").includes("404")
    )
      return (
        <Link href="/">
          <Button
            isIconOnly
            className="rounded-full bg-main text-white text-xl w-12 "
            size="md"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </Link>
      );

    return;
  };

  const paginationCheck = () => {
    if (
      router.asPath.split("/").includes("pkmn") ||
      router.asPath.split("/").includes("404")
    ) {
      return <></>;
    } else {
      return (
        <>
          <div>
            <Link
              href={`/${Number(currentPage) - 1}`}
              isDisabled={Number(currentPage) <= 0 ? true : false}
            >
              <Button
                isIconOnly
                isDisabled={Number(currentPage) <= 0 ? true : false}
                className="p-4 m-4"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </Button>
            </Link>
          </div>
          <div>
            <Link href={`/${Number(currentPage) + 1}`}>
              <Button isIconOnly className="p-4 m-4 bg-main text-white">
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </Link>
          </div>
        </>
      );
    }

    return;
  };

  //revisamos si el usuario esta en detalles o en 404 para mostrar el boton de back.
  const searchBarCheck = () => {
    if (!router.asPath.split("/").includes("404"))
      return (
        <SearchBar
          onDataFromChild={handleSearch}
          onSubmitFromChild={handleSubmit}
        />
      );

    return;
  };

  return (
    <>
      <div className={`flex min-h-screen flex-row justify-between`}>
        {/* Lado Izquierdo */}
        <Sidebar
          userLevel={1}
          userName="ASHK123"
          userMotto="Work hard on your test"
        ></Sidebar>
        {/* Lado Derecho */}
        <div className="bg-white text-mainText w-full h-screen bg-gradient-to-b from-gradientStart to-gradientEnd">
          <div className="flex flex-col h-full w-full justify-center items-center p-12 pt-6 pb-0 self-end place-self-end">
            <div className="flex flex-row w-full pb-6">
              {/* Back Button */}
              <div className="justify-start pl-3">{backButtonCheck()}</div>
              {/* Search Bar */}
              <div className="ml-auto">{searchBarCheck()}</div>
            </div>
            <div className="text-black w-full h-full overflow-y-scroll no-scrollbar">
              {children}
            </div>
          </div>
        </div>
        <div className="flex fixed bottom-4 right-4">{paginationCheck()}</div>
      </div>
    </>
  );
};
