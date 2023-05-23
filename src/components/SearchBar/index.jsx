import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <form
      className="flex items-center justify-end w-full relative"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        className=" text-xl py-2 px-8 rounded-sm text-gray-500 outline-none "
        maxLength={24}
        placeholder="Search Gifs"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="text-xl text-slate-900 absolute top-0 bottom-0 right-4 m-auto">
        <AiOutlineSearch />
      </button>
    </form>
  );
};