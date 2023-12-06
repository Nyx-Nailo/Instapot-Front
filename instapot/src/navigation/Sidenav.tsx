import { AccountBox, Add, Explore, Favorite, Home, HorizontalRule, Logout } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions";
import MenuLink from "./comp/MenuLink";

const Sidenav = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='md:basis-1/4'>
      <div className='overflow-hidden fixed bottom-0 left-0 bg-white w-full h-14 flex flex-row align-middle items-center justify-evenly gap-3 z-50 border-t-2 border-green-800 text-green-900 md:relative md:border-none md:h-fit md:top-5 md:left-3 md:flex-col md:gap-2 md:bg-transparent md:text-white md:items-start'>
        <span className='hidden md:flex text-3xl text-center mb-2' style={{ fontFamily: "Dancing Script" }}>
          Insta-pot
        </span>
        <MenuLink path='/' icon={<Home />} title='Hem' />
        <MenuLink path='/' icon={<Explore />} title='Utforska' />
        <MenuLink path='/' icon={<Add />} title='Skapa inlägg' />
        <MenuLink path='/' icon={<AccountBox />} title='Profil' />
        <MenuLink path='/' icon={<Favorite />} title='Gillade inlägg' />
        <MenuLink func={handleLogout} hidden={true} icon={<Logout />} title='Logga ut' />
        <MenuLink path='/' hidden={true} icon={<HorizontalRule />} title='Profil edit' />
      </div>
    </div>
  );
};

export default Sidenav;
