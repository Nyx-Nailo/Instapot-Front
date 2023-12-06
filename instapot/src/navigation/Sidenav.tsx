import { AccountBox, Add, Explore, Favorite, Home, HorizontalRule, Logout } from "@mui/icons-material";
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
      <div className='overflow-hidden fixed bottom-0 left-0 bg-white w-full h-14 flex align-middle items-center justify-evenly gap-3 z-50 border-t-2 border-green-800 text-green-900 md:relative md:border-none md:h-fit md:top-5 md:left-3 md:flex-col md:gap-2 md:bg-transparent md:text-white md:items-start'>
        <span className='hidden md:flex text-3xl text-center mb-2' style={{ fontFamily: "Dancing Script" }}>
          Insta-pot
        </span>
        <Link to='/' className='flex flex-row gap-1 hover:text-gray-300'>
          <Home />
          <span className='hidden md:flex'>Hem</span>
        </Link>
        <Link to='/' className='flex flex-row gap-1 hover:text-gray-300 md:mt-5'>
          <Explore />
          <span className='hidden md:flex'>Utforska</span>
        </Link>
        <Link to='/' className='flex flex-row gap-1 hover:text-gray-300 rounded-full bg-green-200 border-solid border-green-800 border-2 w-20 h-20 items-center justify-center md:rounded-none md:border-none md:bg-transparent md:w-fit md:h-fit'>
          <Add />
          <span className='hidden md:flex'>Skapa inlägg</span>
        </Link>
        <Link to='/' className='flex flex-row gap-1 hover:text-gray-300 md:mt-10'>
          <AccountBox />
          <span className='hidden md:flex'>Profil</span>
        </Link>
        <Link to='/' className='flex flex-row gap-1 hover:text-gray-300'>
          <Favorite />
          <span className='hidden md:flex'>Gillade inlägg</span>
        </Link>
        <button onClick={handleLogout} className='hidden md:flex flex-row gap-1 hover:text-gray-300 md:mt-2.5'>
          <Logout />
          <span className='hidden md:flex'>Logga ut</span>
        </button>
        <Link to='/profile/edit' className='hidden md:flex flex-row gap-1 hover:text-gray-300 md:mt-20'>
          <HorizontalRule />
          <span className='hidden md:flex italic'>Profil edit</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidenav;
