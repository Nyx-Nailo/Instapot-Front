import { BrowserRouter, Routes, Route } from "react-router-dom";

import NoPage from "./NoPage";
import Timeline from "./timeline/Timeline";
import Homepage from "./Homepage";

import "./App.css";
import ProfileEdit from "./profile/profileedit";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(true);

  const handleChange = () => {
    setActive(active ? false : true);
  };

  const loggedIn = (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}>
          <Route index element={<Timeline />} />
          {/* <Route path='search' element={<Search />} /> */}
          {/* <Route path='explore' element={<Explore />} /> */}
          {/* <Route path='comments' element={<Comments />} /> */}
          {/* <Route path='create' element={<Create />} /> */}
          {/* <Route path='liked' element={<Liked />} /> */}
          {/* <Route path='profile' element={<Profile />} /> */}
          <Route path='profile/edit' element={<ProfileEdit />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

  const notLoggedIn = (
    <div className='h-screen flex items-center justify-center'>
      <div className='max-w-2xl flex flex-col items-center justify-center'>
        {active ? <Login setIsLoggedin={setIsLoggedin} /> : <Signup />}
        <div className=''>
          <span>
            {active ? (
              <>
                <span>Har du inget konto? </span>
                <button onClick={handleChange}>Registrera dig</button>
              </>
            ) : (
              <>
                <span>Har du ett konto? </span>
                <button onClick={handleChange}>Logga in</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );

  return isLoggedin ? loggedIn : notLoggedIn;
};

export default App;
