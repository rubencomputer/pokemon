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
};

//por ahora no tiene props.

const SearchBar = ({ onDataFromChild, onSubmitFromChild }: searchBarProps) => {
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
      className={styles.searchBar}
      classNames={{
        input: ["text-black/90", "placeholder:text-mainText/50"],
        innerWrapper: "bg-transparent w-full pr-0 mr-0",
        inputWrapper: ["shadow-sm", "pr-0"],
      }}
      placeholder="Search"
      endContent={
        <Button
          onPress={handleSubmit}
          className="bg-main rounded-2xl text-white"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      }
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
