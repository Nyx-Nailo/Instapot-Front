import { Link } from "react-router-dom";
import ListImage from "../explore/comp/ListImage";
import { useFetchLikedImages } from "../hooks/useFetch";
import { useSelector } from "react-redux";

const LikedImages = () => {
  const userId = useSelector((state) => (state as any).authReducer.id);

  const { data, isLoading } = useFetchLikedImages(userId);

  if (!isLoading && data) {
    return (
      <div className='flex flex-col gap-3'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
          {data.map((post) => (
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
        <div className='border-t border-gray-200 p-3 bg-white rounded text-black flex flex-col gap-2 italic'>Sorry, inga gillade bilder... </div>
      </div>
    );
  }
};

export default LikedImages;
