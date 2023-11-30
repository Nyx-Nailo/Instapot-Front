import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Layout from "./Layout";
import Homepage from "./Homepage";

function App() {
  return (
    <div className="app">
      <Homepage />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path='blogs' element={<Blogs />} />
    //       <Route path='contact' element={<Contact />} />
    //       <Route path='*' element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
