import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

type LoginRegisterType = {
  setLoggedIn: React.Dispatch<React.SetStateAction<Boolean>>;
};

const Home: React.FC<LoginRegisterType> = (props) => {
  const [register, setRegister] = useState<boolean>(false);

  if (register) {
    return (
      <>
        <Register setRegister={setRegister} />
      </>
    );
  } else {
    return (
      <>
        <Login setRegister={setRegister} setLoggedIn={props.setLoggedIn} />
      </>
    );
  }
};

export default Home;
