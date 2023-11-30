import React from 'react'
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';

function Sidenav() {
  return (
    <div className="sidenav">
        <img className="sidenav__logo" src='https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-or-distractiong.png' 
        alt="" 
        />
        <div className="sidenav__buttons">
            <button className="sidenav__button">
                <HomeIcon />
                <span>Hem</span>             
            </button>
        </div>

        <div className="sidenav__buttons">
            <button className="sidenav__button">
                <SearchIcon />
                <span>Sök</span>
            </button>
        </div>

        <div className="sidenav__buttons">
            <button className="sidenav__button">
                <ExploreIcon />
                <span>Flöde</span>              
            </button>
        </div>

        <div className="sidenav__buttons">
            <button className="sidenav__button">
                <ChatIcon />
                <span>Kommentarer</span>             
            </button>
        </div>

        <div className="sidenav__buttons">
            <button className="sidenav__button">
                <FavoriteBorderIcon />
                <span>Gillamarkeringar</span>               
            </button>
        </div>

        <div className="sidenav__buttons">
            <button className="sidenav__button">
                <AddCircleOutlineIcon />
                <span>Skapa</span>              
            </button>
        </div>
        <div className="sidenav__more">
            <button className="sudenav__button">
                <MenuIcon />
                <span>More</span>
            </button>
        </div>
    </div>
  )
}

export default Sidenav