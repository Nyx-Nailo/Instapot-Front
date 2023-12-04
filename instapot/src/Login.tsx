import { useState } from "react";

type TLogin = {
  setIsLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login: React.FC<TLogin> = ({ setIsLoggedin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className='flex flex-col gap-2'>
      <span className='text-5xl text-center mb-5' style={{ fontFamily: "Dancing Script" }}>
        Insta-pot
      </span>
      <input className='rounded-md px-3 py-1' onChange={(e) => setEmail(e.target.value)} type='email' placeholder='E-post' value={email} />
      <input className='rounded-md px-3 py-1' onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Lösenord' value={password} />
      <button className='mb-5 bg-green-700/70 hover:bg-green-600/70 rounded-md px-3 py-1' onClick={() => setIsLoggedin(true)}>
        Logga in
      </button>
    </div>
  );
};

export default Login;
