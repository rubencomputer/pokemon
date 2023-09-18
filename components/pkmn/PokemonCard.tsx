import { Card } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

type PokemonCardProps = {
  name: string;
  number: number;
  picture?: string;
  types?: string[];
};

const PokemonCard = ({
  name = "MissingNo.",
  number = 0,
  picture = "No Picture",
  types = [],
}: PokemonCardProps) => {
  return (
    <Card className="m-3 p-12 h-96 flex flex-col items-center">
      <h1 className="text-mainText font-bold text-2xl ">{`${name
        .charAt(0)
        .toUpperCase()}${name.slice(1)}`}</h1>
      <span className="text-xl">001</span>
      <Image></Image>
    </Card>
  );
};

export default PokemonCard;
