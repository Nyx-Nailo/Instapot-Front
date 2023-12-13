import { Favorite } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector } from "react-redux";

type TLiked = {
  likes: any;
};

const Liked = ({ likes }: TLiked) => {
  const userId = useSelector((state) => (state as any).authReducer.id);

  const handleSubmit = () => {
    // TODO submit to server
  };

  const imageLiked = likes?.includes(userId);
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
