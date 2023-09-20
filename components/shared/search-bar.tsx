"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/components/shared/search-bar.module.css";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { Button } from "@nextui-org/react";

type searchBarProps = {
  onDataFromChild: Function;
  onSubmitFromChild: Function;
  isDisabled: boolean;
};

//por ahora no tiene props.

const SearchBar = ({
  onDataFromChild,
  onSubmitFromChild,
  isDisabled = false,
}: searchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    onDataFromChild(e);
  };

  const handleSubmit = (e: any) => {
    if (searchTerm == "") return;
    onSubmitFromChild(searchTerm);
  };

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
        innerWrapper: "bg-transparent w-full pr-0 mr-0 ",
        inputWrapper: [
          "shadow-sm",
          "pr-0",
          "focus-within:border-2 focus-within:border-r-0 focus-within:border-main rounded-full",
        ],
      }}
      placeholder="Search"
      endContent={
        <Button
          onPress={handleSubmit}
          isIconOnly
          className="bg-main text-white rounded-full text-xl w-20"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      }
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
