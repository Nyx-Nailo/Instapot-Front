import Avatar from "@mui/material/Avatar";
import Liked from "./comp/Liked";
import { Link } from "react-router-dom";
import { TFlow } from "../../types/tflow";
import { useFetchUsername } from "../../hooks/useFetch";
import Comments from "./comp/Comments";

const Post = ({ id, userID, path, description, createdDate, comments, likedBy }: TFlow) => {
  const replaceImage = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = "/placeholder-image.png";
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

  const { data } = useFetchUsername(userID);

  return (
    <div className='border-t border-gray-200 p-3 bg-white rounded text-black flex flex-col gap-2'>
      <div className='flex flex-row justify-between align-middle items-center px-1'>
        <div className='flex flex-row gap-3 items-center'>
          <div className='flex align-middle items-center gap-2 flex-1'>
            <Avatar>{data?.toString().charAt(0).toUpperCase()}</Avatar>
            {data?.toString()}
          </div>
        </div>
      </div>
      <div>
        <Link to={`image/${id}`}>
          <img src={path} alt='' className='rounded-md border-2 border-gray-300' onError={replaceImage} />
        </Link>
      </div>
      <div className='flex flex-col gap-1 px-1'>
        <div className='flex flex-row gap-2 justify-between mb-2'>
          <div className='flex flex-row gap-4'>
            <Liked likes={likedBy} />
            <Comments comments={comments} />
          </div>
          <span className='text-gray-400 text-xs pr-1'>{moment(createdDate).fromNow()}</span>
        </div>
        <div className='text-justify mb-1'>{description} </div>
      </div>
    </div>
  );
};

export default Post;
