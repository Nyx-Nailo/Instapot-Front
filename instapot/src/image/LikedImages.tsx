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
    return <></>;
  }
};

export default LikedImages;
