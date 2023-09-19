import { Card } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { PokemonType } from "pokenode-ts";
import styles from "../../styles/components/shared/pokemonCard.module.css";

type PokemonCardProps = {
  name: string;
  number: number | string;
  picture: string | null | undefined;
  types: PokemonType[];
};

const PokemonCard = ({
  name = "MissingNo.",
  number = 0,
  picture = "No Picture",
  types,
}: PokemonCardProps) => {
  const processedPokemonTypes = [];

  console.log(types);

  return (
    <Card className="m-3 p-12 h-96 flex flex-col items-center">
      <h1 className="text-mainText font-bold text-2xl ">{`${name
        .charAt(0)
        .toUpperCase()}${name.slice(1)}`}</h1>
      <span className="text-xl">{number}</span>
      <Image src={picture} width={230} height={230}></Image>
      <div className="flex flex-row justify-center items-center">
        {types.map(({ type }, index) => {
          return (
            <p
              className={`${styles[type.name]} text-sm  pl-3 pr-3`}
              key={index}
            >
              {type.name}
            </p>
          );
        })}
      </div>
    </Card>
  );
};

export default PokemonCard;
