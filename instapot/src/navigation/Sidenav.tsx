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
    <>
      <nav className='bg-white my-5 rounded-md w-full mb-3 p-3 lg:p-0 text-green-900 lg:mb-0 lg:absolute lg:top-0 lg:-left-[11.5rem] lg:w-[11rem] lg:max-w-[11rem] lg:bg-transparent lg:text-white'>
        <div className='flex flex-row lg:flex-col gap-4 justify-center items-center align-middle lg:items-start'>
          <div>
            <span className='hidden lg:flex text-3xl text-center mb-2 lg:mb-0' style={{ fontFamily: "Dancing Script" }}>
              Insta-pot
            </span>
          </div>
          <div className='flex flex-row lg:flex-col gap-2'>
            <MenuLink path='/' icon={<Home />} title='Hem' />
            <MenuLink path='/explore' icon={<Explore />} title='Utforska' />
          </div>
          <div className='flex flex-row lg:flex-col gap-2 lg:mt-3 lg:mb-3'>
            <MenuLink path='/' icon={<Add />} title='Skapa inlägg' />
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

  // return (
  //   <div className='md:basis-1/4'>
  //     <div className='overflow-hidden fixed bottom-0 left-0 bg-white w-full h-14 flex flex-row align-middle items-center justify-evenly gap-3 z-50 border-t-2 border-green-800 text-green-900 md:relative md:border-none md:h-fit md:top-5 md:left-3 md:flex-col md:gap-2 md:bg-transparent md:text-white md:items-start'>
  //       <span className='hidden md:flex text-3xl text-center mb-2' style={{ fontFamily: "Dancing Script" }}>
  //         Insta-pot
  //       </span>
  //       <MenuLink path='/' icon={<Home />} title='Hem' />
  //       <MenuLink path='/' icon={<Explore />} title='Utforska' />
  //       <MenuLink path='/' icon={<Add />} title='Skapa inlägg' />
  //       <MenuLink path='/' icon={<AccountBox />} title='Profil' />
  //       <MenuLink path='/' icon={<Favorite />} title='Gillade inlägg' />
  //       <MenuLink func={handleLogout} hidden={true} icon={<Logout />} title='Logga ut' />
  //       <MenuLink path='/profile/edit' hidden={true} icon={<HorizontalRule />} title='Profil edit' />
  //     </div>
  //   </div>
  // );
};

export default Sidenav;
