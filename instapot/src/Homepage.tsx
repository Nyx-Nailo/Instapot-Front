import { Outlet } from "react-router-dom";
import Sidenav from "./navigation/Sidenav";

const Homepage = () => {
  return (
    <>
      <Sidenav />
      <main className='my-5'>
        <Outlet />
      </main>
    </>
  );
};

export default Homepage;
