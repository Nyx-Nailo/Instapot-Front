import Post from "./Posts/Post";
import { useId } from "react";

const Timeline = () => {
  const posts = [
    {
      id: useId(),
      user: "InstaPotter_",
      postImage: "https://cdn.pixabay.com/photo/2019/04/27/21/56/cactus-4161380_1280.jpg",
      likes: Math.floor(Math.random() * 2893),
      timestamp: "2 dagar",
      comments: Math.floor(Math.random() * 100),
    },
    {
      id: useId(),
      user: "LisasPlantor",
      postImage: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
      likes: Math.floor(Math.random() * 34),
      timestamp: "12 timmar",
      comments: Math.floor(Math.random() * 100),
    },
    {
      id: useId(),
      user: "NisseLiten",
      postImage: "https://cdn.pixabay.com/photo/2017/01/24/03/53/plant-2004483_1280.jpg",
      likes: Math.floor(Math.random() * 621),
      timestamp: "3 timmar",
      comments: Math.floor(Math.random() * 100),
    },
    {
      id: useId(),
      user: "MarieNilsson",
      postImage: "https://cdn.pixabay.com/photo/2023/11/13/00/47/cactus-8384331_1280.jpg",
      likes: Math.floor(Math.random() * 865),
      timestamp: "33 minuter",
      comments: Math.floor(Math.random() * 100),
    },
    {
      id: useId(),
      user: "Murre",
      postImage: "https://cdn.pixabay.com/photo/2016/03/11/19/28/fern-1250903_1280.jpg",
      likes: Math.floor(Math.random() * 57),
      timestamp: "1 timme",
      comments: Math.floor(Math.random() * 100),
    },
  ];

  return (
    <div className='flex flex-col gap-3'>
      {posts.map((post) => (
        <Post id={post.id} user={post.user} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp} key={post.id} comments={post.comments} />
      ))}
    </div>
  );
};

export default Timeline;
