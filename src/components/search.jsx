import { Search as SearchIcon } from "lucide-react";
import { use, useState } from "react";

const [search, setSearch] = useState();

const handleSearch = (e) => {
    setSearch(e.target.value);
    //Search using your data 

  return (
    <div className='flex shadow-lg shadow-gray-400 border-b-black border/90 px-2 py-2 w-1/4 rounded-2xl gap-2 outline-1'>
        <input type="text" 
        className="w-full outline-0"
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        />
        <SearchIcon />
    </div>
  );
};

export default Search;