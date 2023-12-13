import { Outlet } from "react-router-dom";
import Sidenav from "./navigation/Sidenav";

const Homepage = () => {
  return (
    <>
      <Sidenav />
      <main className='py-5 pb-20 lg:py-5'>
        <Outlet />
      </main>
    </>
  );
};

export default Homepage;
