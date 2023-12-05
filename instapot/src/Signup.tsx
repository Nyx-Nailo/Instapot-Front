import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  return (
    <div className='flex flex-col gap-2'>
      <span className='text-5xl text-center mb-5' style={{ fontFamily: "Dancing Script" }}>
        Insta-pot
      </span>
      <input className='rounded-md px-4 py-2 text-sm text-black' onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' value={email} />
      <input className='rounded-md px-4 py-2 text-sm text-black' onChange={(e) => setUsername(e.target.value)} type='email' placeholder='Username' value={username} />
      <input className='rounded-md px-4 py-2 text-sm text-black' onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' value={password} />
      <button className='mb-5 bg-green-700/70 hover:bg-green-600/70 rounded-md px-3 py-1'>Sign up</button>
    </div>
  );
};

export default Signup;
