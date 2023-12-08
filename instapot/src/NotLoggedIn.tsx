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
      <div className='bg-white w-[25rem] p-10 rounded-md shadow-xl shadow-black/25 border-black/25 border-[1px]'>
        <div className='flex flex-col gap-2'>
          <span className='text-5xl text-center mb-5' style={{ fontFamily: "Dancing Script" }}>
            InstaPot
          </span>
          {active === "login" ? <Login /> : <Signup />}
          <div className='text-center'>
            <span>
              {active === "login" ? (
                <>
                  <span>
                    Har du <strong>inget</strong> konto?
                  </span>{" "}
                  <button onClick={handleChange}>Registrera dig</button>
                </>
              ) : (
                <>
                  <span>
                    Har du redan <strong>ett konto</strong>?
                  </span>{" "}
                  <button onClick={handleChange}>Logga in</button>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotLoggedIn;
