"use client";

import { Card } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { PokemonType } from "pokenode-ts";
import styles from "../../styles/components/shared/pokemonCard.module.css";
import Link from "next/link";
import { firstUpperCase } from "@/functions/useful_stuff";

type PokemonCardProps = {
  name: string;
  number: number | string;
  picture: string | null | undefined;
  types: PokemonType[];
};

const PokemonCard = ({ name, number, picture, types }: PokemonCardProps) => {
  const processedPokemonTypes = [];

  return (
    <Card className="md:m-3 md:p-16 sm:p-4 p-8 h-fit w-auto lg:h-128 flex flex-col items-center justify-center">
      <h1 className="text-mainText font-bold md:text-2xl text-large ">{`${firstUpperCase(
        name
      )}`}</h1>
      <span className="text-xl">{number}</span>
      <Image src={picture} className="min-w-full"></Image>
      <div className="flex flex-row justify-evenly">
        {types.map(({ type }, index) => {
          return (
            <p
              className={`${
                styles[type.name]
              } md:text-sm text-sm pl-3 pr-3 m-1 rounded-2xl`}
              key={index}
            >
              {firstUpperCase(type.name)}
            </p>
          );
        })}
      </div>
    </Card>
  );
};

export default PokemonCard;
