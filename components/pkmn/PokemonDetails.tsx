import { Card } from "@nextui-org/react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "pokenode-ts";
import Link from "next/link";
import SearchBar from "../shared/search-bar";
import { Image } from "@nextui-org/react";

type PokemonDetailsProps = {
  pokemonData: Pokemon;
};

const PokemonDetails: React.FC<PokemonDetailsProps> = ({
  pokemonData,
}: any) => {
  console.log(pokemonData);
  return (
    <>
      <div className="flex flex-col h-full w-full justify-center items-center p-12 pt-5 self-end place-self-end overflow-y-scroll">
        <div className="flex flex-row self-end mb-6">
          <SearchBar />
        </div>
        <div className="text-black w-full h-full grid grid-cols-3 gap-8">
          <Card className="p-12 h-3/5">
            <div className="flex flex-col">
              <Image
                width={250}
                height={250}
                src={
                  pokemonData.sprites.other?.["official-artwork"].front_default
                }
              ></Image>
            </div>
          </Card>
          <Card className="col-span-2  p-12">
            <h1>Hola</h1>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
