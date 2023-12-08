import { useId } from "react";
import { Link } from "react-router-dom";
import ListImage from "../explore/comp/ListImage";

const LikedImages = () => {
  const posts = [
    {
      id: useId(),
      postImage: "https://cdn.pixabay.com/photo/2019/04/27/21/56/cactus-4161380_1280.jpg",
    },
    {
      id: useId(),
      postImage: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
    },
    {
      id: useId(),
      postImage: "https://cdn.pixabay.com/photo/2017/01/24/03/53/plant-2004483_1280.jpg",
    },
    {
      id: useId(),
      postImage: "https://cdn.pixabay.com/photo/2023/11/13/00/47/cactus-8384331_1280.jpg",
    },
    {
      id: useId(),
      postImage: "https://cdn.pixabay.com/photo/2016/03/11/19/28/fern-1250903_1280.jpg",
    },
  ];

  return (
    <div className='flex flex-col gap-3'>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
        {posts.map((post) => (
          <Link to={`/image/${post.id}`} key={post.id}>
            <ListImage path={post.postImage} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LikedImages;
