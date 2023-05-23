import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useGifs } from "../../Context/GifsContext/GifsContext";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { search } = useGifs();

  const handleSearch = (e) => {
    e.preventDefault();
    search(query);
  };

  return (
    <form
      className="flex items-center justify-end w-full relative"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        className=" text-xl px-4 py-1 md:py-2 md:px-8 rounded-sm text-gray-500 outline-none "
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
