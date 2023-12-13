import { AccountBox, Add, Explore, Favorite, Home, HorizontalRule, Logout } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions";
import MenuLink from "./comp/MenuLink";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav className='fixed -bottom-2.5 left-0 right-0 bg-white my-5 rounded-md w-full mb-3 p-3 lg:p-0 text-green-900 lg:mb-0 lg:absolute lg:top-0 lg:-left-[11.5rem] lg:w-[11rem] lg:max-w-[11rem] lg:bg-transparent lg:text-white'>
        <div className='flex flex-row lg:flex-col gap-4 justify-center items-center align-middle lg:items-start'>
          <div>
            <span className='hidden lg:flex text-3xl text-center mb-2 lg:mb-0' style={{ fontFamily: "Dancing Script" }}>
              <Link to='/'>Insta-pot</Link>
            </span>
          </div>
          <div className='flex flex-row lg:flex-col gap-2'>
            <MenuLink path='/' icon={<Home />} title='Hem' />
            <MenuLink path='/explore' icon={<Explore />} title='Utforska' />
          </div>
          <div className='flex flex-row lg:flex-col gap-2 lg:mt-3 lg:mb-3'>
            <MenuLink path='/image/upload' icon={<Add />} title='Skapa inlägg' />
          </div>
          <div className='flex flex-row lg:flex-col gap-2'>
            <MenuLink path='/' icon={<AccountBox />} title='Profil' />
            <MenuLink path='/image/liked' icon={<Favorite />} title='Gillade inlägg' />
          </div>
          <div className='flex flex-row lg:flex-col gap-2 lg:mt-3 lg:mb-3'>
            <MenuLink func={handleLogout} hidden={true} icon={<Logout />} title='Logga ut' />
          </div>
          <div className='flex flex-row lg:flex-col gap-2'>
            <MenuLink path='/profile/edit' hidden={true} icon={<HorizontalRule />} title='Profil edit' />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidenav;
