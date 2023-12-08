import { SearchSharp } from "@mui/icons-material";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO submit to server
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='border-t border-gray-200 p-3 bg-white rounded text-black flex flex-col gap-2 relative w-full'>
          <button className='absolute z-50 top-4 right-5'>
            <SearchSharp />
          </button>
          <input type='text' placeholder='Sök...' onChange={(e) => setSearch(e.target.value)} className='p-1 indent-1 border-gray-300 border-b-[1px] pr-9' value={search} />
        </div>
      </form>
    </>
  );
};

export default Search;
