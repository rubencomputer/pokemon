"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/SearchBar.module.css";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { Button, Image } from "@nextui-org/react";

type SearchBarProps = {
  onDataFromChild: Function;
  onSubmitFromChild: Function;
  isDisabled: boolean;
};

//por ahora no tiene props.

const SearchBar: React.FC<SearchBarProps> = ({
  onDataFromChild,
  onSubmitFromChild,
  isDisabled = false,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  //Maneja el cambio del texto.

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    onDataFromChild(e);
  };

  //maneja el submit al darle click.

  const handleSubmit = (e: any) => {
    if (searchTerm == "") return;
    onSubmitFromChild(searchTerm);
  };

  //maneja el submit al presionar enter.

  const handleKeyBoardSubmit = (e: any) => {
    if (searchTerm == "") return;
    if (!(e.key === "Enter")) return;
    onSubmitFromChild(searchTerm);
  };

  return (
    <Input
      radius="lg"
      onKeyDown={handleKeyBoardSubmit}
      className={`${styles.searchBar} w-full`}
      isDisabled={isDisabled}
      classNames={{
        input: ["text-black", "placeholder:text-mainText/50 text-md "],
        innerWrapper: "bg-transparent w-full pr-0 ",
        inputWrapper: [
          "shadow-sm",
          "pr-0",
          "focus-within:border-2 focus-within:border-r-0 focus-within:border-main rounded-full ",
        ],
      }}
      placeholder="Search"
      endContent={
        <Button
          onPress={handleSubmit}
          isIconOnly
          className="bg-main text-white rounded-full text-xl w-20"
        >
          {/* <Image src="Search.svg" /> */}
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      }
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
