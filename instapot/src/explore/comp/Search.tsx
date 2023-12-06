import { SearchSharp } from "@mui/icons-material";

const Search = () => {
  return (
    <>
      <div className='border-t border-gray-200 p-3 bg-white rounded text-black flex flex-col gap-2 relative w-full'>
        <button className='absolute z-50 top-4 right-5'>
          <SearchSharp />
        </button>
        <input type='text' placeholder='Sök...' className='p-1 indent-1 border-gray-300 border-b-[1px] pr-9' />
      </div>
    </>
  );
};

export default Search;
