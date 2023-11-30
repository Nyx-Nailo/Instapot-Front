import Avatar from '@mui/material/Avatar';
import MoreHorizeIcon from "@mui/icons-material/MoreHoriz"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import "./Post.css"

function Post({user, postImage, likes, timestamp}) {
  return (
    <div className='post'>
        <div className="post__header">
            <div className="post__headerAuthor">
                <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
                {user} • <span>{timestamp}</span>
            </div>
            <MoreHorizeIcon /> 
        </div>
        <div className="post__image">
            <img 
                src={postImage}
                alt=""
             />
        </div>
        <div className="post__footer">
            <div className="post__footerIcons">
               <div className="post__iconsMain">
                    <FavoriteBorderIcon className="postIcon"/>
                    <ChatBubbleOutlineIcon className="postIcon"/>
                    <TelegramIcon className="postIcon"/>
                </div> 
               <div className="post__iconSave">
                <BookmarkBorderIcon className="postIcon"/>
               </div>
               
            </div>
            <div className="post__imageText">
               <p>It is a long established fact that a reader will be distracted by the readable 
                content of a page when looking at its layout.The point of using Lorem Ipsum is 
                that it has a more-or-less normal distribution of letters, as opposed to using 
                'Content here, content here',  </p>
               </div>
            {likes} gillamarkeringar..
        </div>
    </div>
  )
}

export default Post