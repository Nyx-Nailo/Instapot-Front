import { useState } from "react";

import Login from "./Login";
import Signup from "./Signup";

const NotLoggedIn = () => {
  const [active, setActive] = useState<"login" | "signup">("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='max-w-2xl flex flex-col items-center justify-center'>
        {active === "login" ? <Login /> : <Signup />}
        <div className=''>
          <span>
            {active === "login" ? (
              <>
                <span>Har du inget konto?</span> <button onClick={handleChange}>Registrera dig</button>
              </>
            ) : (
              <>
                <span>Har du ett konto?</span> <button onClick={handleChange}>Logga in</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotLoggedIn;
