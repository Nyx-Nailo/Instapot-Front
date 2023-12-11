import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

type TComments = {
  comments: any;
};

const Comments = ({ comments }: TComments) => {
  return (
    <>
      <button className='flex flex-row gap-2 cursor-pointer'>
        <ChatBubbleOutlineIcon className='hover:fill-gray-400' />
        <span className='text-gray-500'>{comments?.length}</span>
      </button>
    </>
  );
};

export default Comments;
