"use client";

import { Card } from "@nextui-org/react";
import PokemonCard from "./PokemonCard";
import { Pokemon, PokemonType } from "pokenode-ts";
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
  return (
    <>
      {/* <div className="flex flex-col h-full w-full justify-center items-center self-end place-self-end"> */}
      <div className="text-black w-full h-fit flex flex-col md:grid md:grid-cols-3 grid-cols-1 gap-2">
        <Card className="m-3 p-12 h-auto md:h-128">
          <div className="flex flex-col justify-center items-center h-full">
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
        <Card className="md:col-span-2 p-12 m-3">
          <div className="flex flex-col justify-center items-center">
            <h1 className="md:text-5xl lg:text-6xl text-4xl mb-3 text-mainText font-bold items-center">{`${firstUpperCase(
              pokemonData.name
            )}`}</h1>
            <div className="flex flex-row">
              {pokemonData.types.map(({ type }: PokemonType, index: number) => {
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
              <div className="flex flex-row ">
                <Image
                  src={pokemonData.sprites.front_shiny}
                  className="justify-start"
                />
                <Image src={pokemonData.sprites.back_shiny} />
              </div>
            </div>
          </div>
        </Card>
      </div>
      {/* </div> */}
    </>
  );
};

export default PokemonDetails;
