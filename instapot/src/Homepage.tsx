import { Outlet } from "react-router-dom";
import Sidenav from "./navigation/Sidenav";

function Homepage() {
  return (
    <div className='w-full pb-20 md:p-2 md:flex md:flex-col md:m-auto md:max-w-4xl'>
      <div className='flex justify-center'>
        <Sidenav />
        <Outlet />
        <aside className='hidden md:flex md:basis-1/4'></aside>
      </div>
    </div>
  );
}

export default Homepage;
