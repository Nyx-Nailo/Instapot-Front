import "./App.css";
import LoggedIn from "./LoggedIn";
import NotLoggedIn from "./NotLoggedIn";

import { useSelector } from "react-redux";

const App = () => {
  const isLoggedIn = useSelector((state) => (state as any).authReducer.isLoggedIn);

  return isLoggedIn ? <LoggedIn /> : <NotLoggedIn />;
};

export default App;
