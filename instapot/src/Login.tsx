import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/actions";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className='flex flex-col gap-2'>
      <span className='text-5xl text-center mb-5' style={{ fontFamily: "Dancing Script" }}>
        Insta-pot
      </span>
      <input className='rounded-md px-4 py-2 text-sm text-black' onChange={(e) => setEmail(e.target.value)} type='email' placeholder='E-post' value={email} />
      <input className='rounded-md px-4 py-2 text-sm text-black' onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Lösenord' value={password} />
      <button className='mb-5 bg-green-700/70 hover:bg-green-600/70 rounded-md px-3 py-1' onClick={handleLogin}>
        Logga in
      </button>
    </div>
  );
};

export default Login;
