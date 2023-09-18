import SearchBar from "../shared/search-bar";

const PokemonSearch: React.FC = ({ props }: any) => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center p-12 self-end place-self-end">
        <div className="flex flex-row self-end mb-12">
          <SearchBar />
        </div>
        <div className="text-black">
          <h1>Pokemon List</h1>
        </div>
      </div>
    </>
  );
};

export default PokemonSearch;
