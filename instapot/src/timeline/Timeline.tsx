import { useSelector } from "react-redux";
import { useFetchFlowImages } from "../hooks/useFetch";
import Post from "./Posts/Post";

const Timeline = () => {
  const userId = useSelector((state) => (state as any).authReducer.id);

  const { data, isLoading } = useFetchFlowImages(userId);

  if (!isLoading && data) {
    const newdata = data?.slice(0, 10);

    return (
      <div className='flex flex-col gap-3'>
        {newdata?.map((data) => (
          <Post id={data.id} userID={data.userID} description={data.description} path={data.path} createdDate={data.createdDate} comments={data.comments} likedBy={data.likedBy} key={data.id} />
        ))}
      </div>
    );
  } else {
    return (
      <div className='flex flex-col gap-3'>
        <div className='border-t border-gray-200 p-3 bg-white rounded text-black flex flex-col gap-2 italic'>Sorry, inget flöde... </div>
      </div>
    );
  }
};

export default Timeline;
