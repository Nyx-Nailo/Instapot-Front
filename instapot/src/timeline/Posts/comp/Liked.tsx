import { Favorite } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type TLiked = {
  likes: any;
  userID: number;
};

const Liked = ({ likes, userID }: TLiked) => {
  const handleSubmit = () => {
    // TODO submit to server
  };

  const imageLiked = likes?.includes(41);
  const imageLikes = likes?.length ?? 0;

  const notLiked = (
    <>
      <button className='flex flex-row gap-2 cursor-pointer' onClick={handleSubmit}>
        <FavoriteBorderIcon className='hover:fill-gray-400' />
        <span className='text-gray-500'>{imageLikes}</span>
      </button>
    </>
  );

  const Liked = (
    <>
      <button className='flex flex-row gap-2 cursor-pointer' onClick={handleSubmit}>
        <Favorite className='text-red-400' />
        <span className='text-gray-500'>{imageLikes}</span>
      </button>
    </>
  );

  return imageLiked ? Liked : notLiked;
};

export default Liked;
