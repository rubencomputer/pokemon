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
    <Card className="m-3 p-12 h-128 flex flex-col items-center justify-center">
      <h1 className="text-mainText font-bold text-2xl ">{`${firstUpperCase(
        name
      )}`}</h1>
      <span className="text-xl">{number}</span>
      <Image src={picture} width={230} height={230}></Image>
      <div className="flex flex-row justify-evenly">
        {types.map(({ type }, index) => {
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
    </Card>
  );
};

export default PokemonCard;
