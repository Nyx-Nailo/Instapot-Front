import { Link } from "react-router-dom";
import ListImage from "./comp/ListImage";
import Search from "./comp/Search";
import { useFetchAllImages } from "../hooks/useFetch";

const Explore = () => {
  const { data, isLoading } = useFetchAllImages();

  if (!isLoading && data) {
    return (
      <div className='flex flex-col gap-3'>
        {/* <Search /> */}
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
          {data?.map((post) => (
            <Link to={`/image/${post.id}`} key={post.id}>
              <ListImage path={post.path} />
            </Link>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className='flex flex-col gap-3'>
        <div className='border-t border-gray-200 p-3 bg-white rounded text-black flex flex-col gap-2 italic'>Sorry, inget att lista i explore... </div>
      </div>
    );
  }
};

export default Explore;
