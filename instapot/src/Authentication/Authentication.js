import { useState } from 'react';
import "./Authentication.css";
import Login from './Login';
import Signup from "./Signup";

function Authentication() {
    const [active, setActive] = useState("login")

    const handleChange = () => {
        setActive(active === "login" ? "signup" : "login")
    }
  return (
    <div className="authentication">
        <div className="auth">
            {active === "login" ? <Login /> : <Signup />}
            
            <div className="auth__more">
                <span>
                {active === "login" ? (
                    <>
                    Har du inget konto? 
                    <button onClick={handleChange}>
                        Registrera dig 
                    </button>
                    </>
                    ) : (
                    <>
                    Har du ett konto?  
                    <button onClick={handleChange}>
                        Logga in 
                    </button>
                    </>
                )}               
                </span>
            </div>
        </div>
    </div>
  )
}

export default Authentication