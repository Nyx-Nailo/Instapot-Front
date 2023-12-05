import { AccountBox, Add, Chat, Explore, Favorite, Home, Menu, Search } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions";

const Sidenav = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='md:basis-1/4'>
      <div className='overflow-hidden fixed bottom-0 left-0 bg-white w-full h-14 flex align-middle items-center justify-evenly gap-3 z-50 border-t-2 border-green-800 text-green-900 md:relative md:border-none md:h-fit md:top-5 md:left-3 md:flex-col md:gap-3 md:bg-transparent md:text-white md:items-start'>
        <span className='text-3xl text-center mb-1' style={{ fontFamily: "Dancing Script" }}>
          Insta-pot
        </span>
        <Link to='/' className='flex flex-row gap-1 hover:text-gray-300'>
          <Home />
          <span className='hidden md:flex'>Hem</span>
        </Link>
        <Link to='/' className='hidden md:flex flex-row gap-1 hover:text-gray-300'>
          <Search />
          <span className='hidden md:flex'>Sök</span>
        </Link>
        <Link to='/' className='flex flex-row gap-1 hover:text-gray-300'>
          <Explore />
          <span className='hidden md:flex'>Utforska</span>
        </Link>
        <Link to='/' className='hidden md:flex flex-row gap-1 hover:text-gray-300'>
          <Chat />
          <span className='hidden md:flex'>Kommentarer</span>
        </Link>
        <Link to='/' className='flex flex-row gap-1 hover:text-gray-300 rounded-full bg-green-200 border-solid border-green-800 border-2 w-20 h-20 items-center justify-center md:rounded-none md:border-none md:bg-transparent md:w-fit md:h-fit'>
          <Add />
          <span className='hidden md:flex'>Skapa</span>
        </Link>
        <Link to='/' className='flex flex-row gap-1 hover:text-gray-300'>
          <Favorite />
          <span className='hidden md:flex'>Gillade</span>
        </Link>
        <Link to='/' className='flex flex-row gap-1 hover:text-gray-300'>
          <AccountBox />
          <span className='hidden md:flex'>Profil</span>
        </Link>
        <Link to='/profile/edit' className='flex flex-row gap-1 hover:text-gray-300'>
          <AccountBox />
          <span className='hidden md:flex'>Profil edit</span>
        </Link>
        <button onClick={handleLogout} className='flex flex-row gap-1 hover:text-gray-300'>
          <AccountBox />
          <span className='hidden md:flex'>Logga ut</span>
        </button>
        {/* <a to='/' className='hidden md:flex flex-row gap-1 mt-10 hover:text-gray-300'>
          <Menu />
          <span className='hidden md:flex'>More</span>
        </a> */}
      </div>
    </div>
  );
};

export default Sidenav;
