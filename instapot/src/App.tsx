import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Layout from "./Layout";
import LoginRegister from "./LoginRegister";

function App() {
  const [loggedIn, setLoggedIn] = useState<Boolean>(false);

  if (loggedIn) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout setLoggedIn={setLoggedIn} />}>
            <Route index element={<Home />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <>
        <LoginRegister setLoggedIn={setLoggedIn} />
      </>
    );
  }
}

export default App;
