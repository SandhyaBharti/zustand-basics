import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

function Search({ setQuery }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    // update parent state
    setQuery(value);
  };

  return (
    <div className="flex shadow-lg shadow-gray-400 border-b-black border/90 px-2 py-2 w-1/4 rounded-2xl gap-2 outline-1">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full outline-0 placeholder:text-sm placeholder:text-gray-400"
        value={search}
        onChange={handleSearch}
      />
      <SearchIcon />
    </div>
  );
}

export default Search;
