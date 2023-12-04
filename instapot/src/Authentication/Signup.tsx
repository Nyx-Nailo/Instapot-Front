import React, { useState, SyntheticEvent } from "react";
import "./Signup.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  Auth,
  User,
} from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleSignUp = (event: SyntheticEvent) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth as Auth, email, password)
      .then((authUser) => {
        signInWithEmailAndPassword(auth as Auth, email, password).then(() => {

           const currentUser = auth.currentUser as User;

           updateProfile(currentUser, {
            displayName: username,
           });
          });
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="signup">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="email"
        placeholder="Username"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button onClick={handleSignUp}>Sign up</button>
    </div>
  );
}

export default Signup;