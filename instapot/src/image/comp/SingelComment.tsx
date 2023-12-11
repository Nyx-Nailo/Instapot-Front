import Avatar from "@mui/material/Avatar";

const SingelComment = ({ id, order }: number | any) => {
  return (
    <>
      <div className='border-t border-gray-200 p-3 bg-gray-200 rounded text-black flex flex-col gap-2 mb-2'>
        <div className='flex flex-row gap-3 px-1'>
          <div className={order === 1 ? "order-first" : "order-last"}>
            <Avatar>E</Avatar>
          </div>
          <div className='flex flex-col text-sm'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
            'Content here, content here',{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingelComment;
