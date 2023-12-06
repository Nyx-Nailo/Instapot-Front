import { Outlet } from "react-router-dom";
import Sidenav from "./navigation/Sidenav";

const Homepage = () => {
  return (
    <div className='m-5'>
      <Sidenav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Homepage;
