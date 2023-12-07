import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useState } from "react";
import { Favorite } from "@mui/icons-material";

type TLiked = {
  likes: number;
};

const Liked: React.FC<TLiked> = ({ likes }) => {
  const [isLiked, setIsLiked] = useState<Boolean>(Math.random() < 0.3);
  const [likeings, setLikings] = useState<number>(likes);

  const handleSubmit = () => {
    // TODO submit to server
    setIsLiked(false);
    setLikings(likeings + 1);
  };

  const Liked = (
    <>
      <button className='flex flex-row gap-2 cursor-pointer' onClick={handleSubmit}>
        <Favorite className='text-red-400' />
        <span className='text-red-500'>{likeings}</span>
      </button>
    </>
  );

  const Unliked = (
    <>
      <button className='flex flex-row gap-2 cursor-pointer' onClick={handleSubmit}>
        <FavoriteBorderIcon className='hover:fill-gray-400' />
        <span className='text-gray-500'>{likeings}</span>
      </button>
    </>
  );

  return isLiked ? Liked : Unliked;
};

export default Liked;
