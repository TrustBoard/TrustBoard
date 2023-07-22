import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="bg-color3 flex flex-row items-center justify-start gap-3 w-96 py-3 px-5 rounded-xl border">
      <AiOutlineSearch className="w-6 h-6 text-color2" />
      <span className="font-medium">Search here ...</span>
    </div>
  );
};

export default SearchBar;
