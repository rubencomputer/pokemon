import { Card } from "@nextui-org/react";
import PokemonCard from "./PokemonCard";

type ListProps = {
  listData: any;
};

type pokemonData = {
  name: string;
  url: string;
};

const PokemonList = ({ listData }: ListProps) => {
  console.log();
  return (
    <>
      <div className="grid grid-cols-3 overflow-y-clip">
        {listData.map((pkmn: pokemonData) => {
          return (
            <PokemonCard
              name={pkmn.name}
              number={1}
              picture="url"
              types={["grass", "poison"]}
              key={1}
            />
          );
        })}
      </div>
    </>
  );
};

export default PokemonList;
