import { Outlet, Link } from "react-router-dom";

type LayoutType = {
  setLoggedIn: React.Dispatch<React.SetStateAction<Boolean>>;
};

const Layout: React.FC<LayoutType> = (props) => {
  return (
    <main className='p-2 grid gap-2'>
      <header className='grid grid-flow-col gap-5 align-middle justify-start'>
        insta-pot
        <nav className='grid grid-flow-col gap-5 align-middle justify-start'>
          <Link to='/'>Home</Link>
          <Link to='/blogs'>Blogs</Link>
          <Link to='/contact'>Contact</Link>
          <button onClick={() => props.setLoggedIn(false)}>Logout</button>
        </nav>
      </header>
      <section>
        <Outlet />
      </section>
      <footer>
        <nav className='grid grid-flow-col gap-5 align-middle justify-start'>
          <Link to='/'>Home</Link>
          <Link to='/blogs'>Blogs</Link>
          <Link to='/contact'>Contact</Link>
          <button onClick={() => props.setLoggedIn(false)}>Logout</button>
        </nav>
      </footer>
    </main>
  );
};

export default Layout;
