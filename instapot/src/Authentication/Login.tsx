import React, { useState } from 'react';
import "./Login.css";
import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = () => {
        signInWithEmailAndPassword(auth as Auth, email, password);
    };

  return (
    <div className="login">
        <img 
            src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-or-distractiong.png" 
            alt="" 
        />
        <input 
            onChange={e => setEmail(e.target.value)} 
            type="email" 
            placeholder="Telefonnummer, användarnamn eller e-post"
            value={email}
        />
        <input 
            onChange={e => setPassword(e.target.value)} 
            type="password" 
            placeholder="Lösenord" 
            value={password}
        />
        <button onClick={handleLogin}>Logga in</button>
    </div>
  )
}

export default Login;