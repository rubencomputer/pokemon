"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/components/shared/search-bar.module.css";
import { Input } from "@nextui-org/input";

type searchBarProps = {};

//por ahora no tiene props.

const SearchBar = () => {
  return (
    <Input
      radius="lg"
      className={styles.searchBar}
      classNames={{
        input: ["text-black/90", "placeholder:text-mainText/50"],
        innerWrapper: "bg-transparent w-full pr-0 mr-0",
        inputWrapper: ["shadow-sm", "pr-0"],
      }}
      placeholder="Search"
      endContent={
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="bg-main rounded-2xl m-0 p-3 pl-4 w-8"
        />
      }
    />
  );
};

export default SearchBar;
