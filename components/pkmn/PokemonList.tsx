"use client";

import { Card } from "@nextui-org/react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "pokenode-ts";
import Link from "next/link";
import { useMyContext } from "@/providers/PokeContext";

type Props = {};

const PokemonList: React.FC<Props> = () => {
  const { data } = useMyContext();

  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-2 md:gap-2 gap-6 overflow-y-clip">
        {Array.isArray(data) &&
          data.map((pkmn: Pokemon, index: number) => {
            return (
              <Link href={`/pkmn/${pkmn.id}`} key={index}>
                <PokemonCard
                  name={pkmn.name}
                  number={pkmn.id.toString().padStart(3, "0")}
                  picture={
                    pkmn.sprites.other?.["official-artwork"].front_default
                  }
                  types={pkmn.types}
                />
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default PokemonList;
