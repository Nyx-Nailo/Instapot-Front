import { Routes, Route } from "react-router-dom";

import Homepage from "./Homepage";
import NoPage from "./NoPage";
import Timeline from "./timeline/Timeline";
import ProfileEdit from "./profile/profileedit";
import Explore from "./explore/Explore";
import Image from "./image/Image";
import LikedImages from "./image/LikedImages";

const LoggedIn = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}>
        <Route index element={<Timeline />} />
        {/* <Route path='search' element={<Search />} /> */}
        <Route path='explore' element={<Explore />} />
        {/* <Route path='comments' element={<Comments />} /> */}
        {/* <Route path='create' element={<Create />} /> */}
        <Route path='image/liked' element={<LikedImages />} />
        <Route path='image/:id' element={<Image />} />
        {/* <Route path='profile' element={<Profile />} /> */}
        <Route path='profile/edit' element={<ProfileEdit />} />
        <Route path='*' element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default LoggedIn;
