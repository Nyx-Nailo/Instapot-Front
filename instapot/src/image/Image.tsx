import { useParams } from "react-router-dom";
import Liked from "../timeline/Posts/comp/Liked";

import Avatar from "@mui/material/Avatar";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import { useFetchSingleImage, useFetchUsername } from "../hooks/useFetch";
import SingelComment from "./comp/SingelComment";

const Image = () => {
  const [comment, setComment] = useState<string>("");

  const params = useParams();

  const id = params.id;

  const { data, isLoading } = useFetchSingleImage(id);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO submit to server
  };

  var moment = require("moment");
  moment.locale("sv", {
    relativeTime: {
      future: "om %s",
      past: "%s sedan",
      s: "några sekunder",
      m: "en minut",
      mm: "%d minuter",
      h: "en timme",
      hh: "%d timmar",
      d: "en dag",
      dd: "%d dagar",
      M: "en månad",
      MM: "%d månader",
      y: "ett år",
      yy: "%d år",
    },
  });

  const replaceImage = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = "/placeholder-image.png";
  };

  const { data: username } = useFetchUsername(data?.userID);

  if (!isLoading && data) {
    return (
      <>
        <div className='border-t border-gray-200 p-3 bg-white rounded text-black flex flex-col gap-2 mb-2'>
          <div className='flex align-middle items-center gap-2 flex-1'>
            <Avatar>{username?.toString().charAt(0).toUpperCase()}</Avatar>
            {username?.toString()}
          </div>
          <div>
            <img src={data?.path} alt='id' className='rounded-md border-2 border-gray-300' onError={replaceImage} />
          </div>
          <div className='flex flex-col gap-1 px-1'>
            <div className='flex flex-row gap-2 justify-between mb-2'>
              <div className='flex flex-row gap-4'>
                <Liked likes={data?.likedBy} userID={data?.userID} />
              </div>
              <span className='text-gray-400 text-xs pr-1'>{moment(data?.createdDate).fromNow()}</span>
            </div>
            <div className='text-justify'>{data?.description}</div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='border-t border-gray-200 p-3 bg-white rounded text-black flex flex-col gap-2 relative w-full mb-2'>
            <button className='hover:cursor-not-allowed absolute z-50 top-4 right-5'>
              <Add className='text-gray-500' />
            </button>
            <input type='text' placeholder='Lämna en kommentar...' onChange={(e) => setComment(e.target.value)} disabled className='hover:cursor-not-allowed p-1 indent-1 border-gray-300 border-b-[1px] pr-9 text-sm' value={comment} />
          </div>
        </form>
        {data?.comments?.map((com: any, index: any) => {
          return <SingelComment id={com} key={com} order={index % 2 === 0 ? 1 : 2} />;
        })}
      </>
    );
  } else {
    return <></>;
  }
};

export default Image;
