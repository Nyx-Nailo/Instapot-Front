import { useFetchFlowImages } from "../hooks/useFetch";
import Post from "./Posts/Post";

const Timeline = () => {
  const { data } = useFetchFlowImages(41);

  const newdata = data?.slice(0, 5);

  return (
    <div className='flex flex-col gap-3'>
      {newdata?.map((data) => (
        <Post id={data.id} userID={data.userID} description={data.description} path={data.path} createdDate={data.createdDate} comments={data.comments} likedBy={data.likedBy} key={data.id} />
      ))}
    </div>
  );
};

export default Timeline;
