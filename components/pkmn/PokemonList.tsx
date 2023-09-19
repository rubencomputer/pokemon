import { Card } from "@nextui-org/react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "pokenode-ts";
import Link from "next/link";

type ListProps = {
  listData: any;
};

type pokemonData = {
  name: string;
  url: string;
};

const PokemonList = ({ listData }: ListProps) => {
  // console.log(listData);
  return (
    <>
      <div className="grid grid-cols-3 gap-1 overflow-y-clip">
        {listData.map((pkmn: Pokemon, index: number) => {
          return (
            <Link href={`/pkmn/${pkmn.id}`}>
              <PokemonCard
                name={pkmn.name}
                number={pkmn.id.toString().padStart(3, "0")}
                picture={pkmn.sprites.other?.["official-artwork"].front_default}
                types={pkmn.types}
                key={index}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default PokemonList;
