import React from 'react'
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { logoutUser } from '../feuters/userSlice';
import { Auth, signOut } from 'firebase/auth';




function Sidenav(): JSX.Element {
    const user = useSelector((state) => (state as any).data.user.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
       dispatch(logoutUser());
        signOut(auth as Auth);
    };

  return (
  <div className="sidenav">
        <img
          className="sidenav__logo"
          src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
          alt="Instagram Logo"
        />

        <div className="sidenav__buttons">
          <button className="sidenav__button">
            <HomeIcon />
            <span>Hem</span>
          </button>
          <button className="sidenav__button">
            <SearchIcon />
            <span>Sök</span>
          </button>
          <button className="sidenav__button">
            <ExploreIcon />
            <span>Flöde</span>
          </button>
          <button className="sidenav__button">
            <ChatIcon />
            <span>Kommentarer</span>
          </button>
          <button className="sidenav__button">
            <FavoriteBorderIcon />
            <span>Gillarmarkeringar</span>
          </button>
          <button className="sidenav__button">
            <AddCircleOutlineIcon />
            <span>Skapa</span>
          </button>
          <button className="sidenav__button">
            <Avatar>
              {user.username ? user.username.charAt(0).toUpperCase() : "A"}
            </Avatar>
            <span>
              {user.username}{" "}
              <button onClick={handleLogout} className="logout__button">
                Logga ut
              </button>
            </span>
          </button>
        </div>
        <div className="sidenav__more">
          <button className="sidenav__button">
            <MenuIcon />
            <span className="sidenav__buttonText">Mer</span>
          </button>
        </div>
      </div>
  )
}

export default Sidenav