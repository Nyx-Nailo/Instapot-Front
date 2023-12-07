import Avatar from "@mui/material/Avatar";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Liked from "./comp/Liked";
import { Link } from "react-router-dom";

type TPost = {
  id: string;
  user: string;
  postImage: string;
  likes: number;
  timestamp: string;
};

const Post = ({ id, user, postImage, likes, timestamp }: TPost) => {
  return (
    <div className='border-t border-gray-200 p-3 bg-white rounded text-black flex flex-col gap-2'>
      <div className='flex flex-row justify-between align-middle items-center px-1'>
        <div className='flex flex-row gap-3 items-center'>
          <div className='flex align-middle items-center gap-2 flex-1 hover:text-gray-400 cursor-pointer'>
            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
            {user}
          </div>
        </div>
      </div>
      <div>
        <Link to={`image/${id}`}>
          <img src={postImage} alt='' className='rounded-md border-2 border-gray-300' />
        </Link>
      </div>
      <div className='flex flex-col gap-1 px-1'>
        <div className='flex flex-row gap-2 justify-between  mb-2'>
          <div className='flex flex-row gap-4'>
            <Liked likes={likes} />
            <button className='flex flex-row gap-2 cursor-pointer'>
              <ChatBubbleOutlineIcon className='hover:fill-gray-400' />
              <span className='text-gray-500'>{Math.floor(Math.random() * 100)}</span>
            </button>
          </div>
          <span className='text-gray-400 text-xs pr-1'>{timestamp} sedan</span>
        </div>
        <div className='text-justify mb-1'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
          'Content here, content here',{" "}
        </div>
        <div>
          <input type='text' placeholder='Lämna en kommentar...' className='text-gray-500 text-sm py-1 w-full border-b-gray-300 border-b-2 pl-1 outline-none indent-2' />
        </div>
      </div>
    </div>
  );
};

export default Post;
