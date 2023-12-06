import { useParams } from "react-router-dom";
import Liked from "../timeline/Posts/comp/Liked";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Avatar from "@mui/material/Avatar";
import { Add } from "@mui/icons-material";

const Image = () => {
  const params = useParams();
  const likes = Math.floor(Math.random() * 127);
  const timestamp = "2 dagar sedan";
  const user = "Lorem";

  return (
    <>
      <div className='border-t border-gray-200 p-3 bg-white rounded text-black flex flex-col gap-2 mb-2'>
        <div>
          <img src='https://cdn.pixabay.com/photo/2019/04/27/21/56/cactus-4161380_1280.jpg' alt={params.id} className='rounded-md border-2 border-gray-300' />
        </div>
        <div className='flex flex-col gap-1 px-1'>
          <div className='flex flex-row gap-2 justify-between mb-2'>
            <div className='flex flex-row gap-4'>
              <Liked likes={likes} />
              <button className='flex flex-row gap-2'>
                <ChatBubbleOutlineIcon className='hover:fill-gray-400' />
                <span className='text-gray-500'>{Math.floor(Math.random() * 100)}</span>
              </button>
            </div>
            <span className='text-gray-400 text-xs pr-1'>{timestamp} sedan</span>
          </div>
          <div className='text-justify'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
            'Content here, content here',{" "}
          </div>
        </div>
      </div>
      <div className='border-t border-gray-200 p-3 bg-white rounded text-black flex flex-col gap-2 relative w-full mb-2'>
        <button className='absolute z-50 top-4 right-5'>
          <Add className='text-gray-500' />
        </button>
        <input type='text' placeholder='Lämna en kommentar...' className='p-1 indent-1 border-gray-300 border-b-[1px] pr-9 text-sm' />
      </div>
      <div className='border-t border-gray-200 p-3 bg-gray-200 rounded text-black flex flex-col gap-2 mb-2'>
        <div className='flex flex-row gap-3 px-1'>
          <div>
            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          </div>
          <div className='flex flex-col text-sm'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
            'Content here, content here',{" "}
          </div>
        </div>
      </div>
      <div className='border-t border-gray-200 p-3 bg-gray-200 rounded text-black flex flex-col gap-2 mb-2'>
        <div className='flex flex-row gap-3 px-1'>
          <div className='flex flex-col text-sm'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
            'Content here, content here',{" "}
          </div>
          <div>
            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
