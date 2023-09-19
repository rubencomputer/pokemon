import { Card } from "@nextui-org/react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "pokenode-ts";
import Link from "next/link";
import SearchBar from "../shared/search-bar";
import { Image } from "@nextui-org/react";
import styles from "../../styles/components/shared/pokemonCard.module.css";
import { firstUpperCase } from "@/functions/useful_stuff";

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
            <div className="flex flex-col justify-center items-center">
              <Image
                width={250}
                height={250}
                src={
                  pokemonData.sprites.other?.["official-artwork"].front_default
                }
              ></Image>
              <div className="flex flex-row p-4">
                <Image
                  width={100}
                  height={100}
                  src={pokemonData.sprites?.front_default}
                ></Image>
                <Image
                  width={100}
                  height={100}
                  src={pokemonData.sprites?.back_default}
                ></Image>
              </div>
            </div>
          </Card>
          <Card className="col-span-2 p-12">
            <h1 className="text-6xl mb-3 text-mainText font-bold">{`${firstUpperCase(
              pokemonData.name
            )}`}</h1>
            <div className="flex flex-row">
              {pokemonData.types.map(({ type }, index: number) => {
                return (
                  <p
                    className={`${
                      styles[type.name]
                    } text-sm pl-3 pr-3 m-1 rounded-2xl`}
                    key={index}
                  >
                    {firstUpperCase(type.name)}
                  </p>
                );
              })}
            </div>
            <div className="flex-col text-mainText ">
              <div className="mt-12 mb-4">
                <h1 className="font-bold text-2xl">Pokedex Number</h1>
                <p className="text-2xl">{pokemonData.id}</p>
              </div>
              <hr></hr>
            </div>
            <div className="flex-col text-mainText ">
              <div className="mt-6 mb-4">
                <h1 className="font-bold text-2xl">Height</h1>
                <p className="text-2xl">{pokemonData.height}</p>
              </div>
              <hr></hr>
            </div>
            <div className="flex-col text-mainText ">
              <div className="mt-6 mb-4">
                <h1 className="font-bold text-2xl">Weight</h1>
                <p className="text-2xl">{pokemonData.weight}</p>
              </div>
              <hr></hr>
            </div>
            <div className="flex-col text-mainText ">
              <div className="mt-6 mb-4">
                <h1 className="font-bold text-2xl">Shiny</h1>
                <div className="flex flex-row">
                  <Image src={pokemonData.sprites.front_shiny} />
                  <Image src={pokemonData.sprites.back_shiny} />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
