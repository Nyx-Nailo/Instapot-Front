import Avatar from "@mui/material/Avatar";
import MoreHorizeIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useState } from "react";
import { Favorite } from "@mui/icons-material";

type TPost = {
  user: string;
  postImage: string;
  likes: number;
  timestamp: string;
};

const Post = ({ user, postImage, likes, timestamp }: TPost) => {
  return (
    <div className='border-t border-gray-200 p-3 bg-white rounded text-black flex flex-col gap-2'>
      <div className='flex flex-row justify-between align-middle items-center px-1'>
        <div className='flex flex-row gap-3 items-center'>
          <div className='flex align-middle items-center gap-2 flex-1 hover:text-gray-400 cursor-pointer'>
            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
            {user}
          </div>
          <div>
            • <span className='text-gray-400'>{timestamp} sedan</span>
          </div>
        </div>
        <MoreHorizeIcon className='hover:fill-gray-400 cursor-pointer' />
      </div>
      <div>
        <img src={postImage} alt='' className='rounded-md border-2 border-gray-300' />
      </div>
      <div className='flex flex-col gap-1 px-1'>
        <div className='flex flex-row gap-2 justify-between'>
          <div className='flex flex-row gap-4'>
            <Liked likes={likes} />
            <button className='flex flex-row gap-2 cursor-pointer'>
              <ChatBubbleOutlineIcon className='hover:fill-gray-400' />
              <span className='text-gray-500'>{Math.floor(Math.random() * 100)}</span>
            </button>
            <TelegramIcon className='hover:fill-gray-400 cursor-pointer' />
          </div>
          <div className='flex flex-row gap-2'>
            <BookmarkBorderIcon className='hover:fill-gray-400 cursor-pointer flex-1' />
          </div>
        </div>
        <div className='text-justify'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
          'Content here, content here',{" "}
        </div>
        <div>
          <input type='text' placeholder='Lämna en kommentar...' className='text-gray-500 text-sm py-1 w-full border-b-gray-300 border-b-2 pl-1 outline-none' />
        </div>
      </div>
    </div>
  );
};

type TLiked = {
  likes: number;
};

const Liked: React.FC<TLiked> = ({ likes }) => {
  const [isLiked, setIsLiked] = useState<Boolean>(Math.random() < 0.3);
  const [likeings, setLikings] = useState<number>(likes);

  const Liked = (
    <>
      <button
        className='flex flex-row gap-2 cursor-pointer'
        onClick={() => {
          setIsLiked(false);
          setLikings(likeings - 1);
        }}>
        <Favorite className='text-red-400' />
        <span className='text-red-500'>{likeings}</span>
      </button>
    </>
  );

  const Unliked = (
    <>
      <button
        className='flex flex-row gap-2 cursor-pointer'
        onClick={() => {
          setIsLiked(true);
          setLikings(likeings + 1);
        }}>
        <FavoriteBorderIcon className='hover:fill-gray-400' />
        <span className='text-gray-500'>{likeings}</span>
      </button>
    </>
  );

  return isLiked ? Liked : Unliked;
};

export default Post;