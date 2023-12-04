import Post from "./Posts/Post";

import { Search } from "@mui/icons-material";

const Timeline = () => {
  const posts = [
    {
      user: "InstaPotter_",
      postImage: "https://cdn.pixabay.com/photo/2019/04/27/21/56/cactus-4161380_1280.jpg",
      likes: Math.floor(Math.random() * 2893),
      timestamp: "2 dagar",
    },
    {
      user: "LisasPlantor",
      postImage: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
      likes: Math.floor(Math.random() * 34),
      timestamp: "12 timmar",
    },
    {
      user: "NisseLiten",
      postImage: "https://cdn.pixabay.com/photo/2017/01/24/03/53/plant-2004483_1280.jpg",
      likes: Math.floor(Math.random() * 621),
      timestamp: "3 timmar",
    },
    {
      user: "MarieNilsson",
      postImage: "https://cdn.pixabay.com/photo/2023/11/13/00/47/cactus-8384331_1280.jpg",
      likes: Math.floor(Math.random() * 865),
      timestamp: "33 minuter",
    },
    {
      user: "Murre",
      postImage: "https://cdn.pixabay.com/photo/2016/03/11/19/28/fern-1250903_1280.jpg",
      likes: Math.floor(Math.random() * 57),
      timestamp: "1 timme",
    },
  ];

  return (
    <div className='flex flex-col gap-3 md:basis-9/12'>
      <div className='border-t border-gray-200 p-3 shadow-lg bg-white rounded text-black flex flex-col gap-2 md:hidden relative'>
        <input type='text' placeholder='Sök...' className='border-b-2 border-gray-200 pl-1 outline-none' />
        <button className='absolute top-2.5 right-3'>
          <Search />
        </button>
      </div>
      <div className='max-w-lg flex flex-col gap-4'>
        {posts.map((post) => (
          <Post user={post.user} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
