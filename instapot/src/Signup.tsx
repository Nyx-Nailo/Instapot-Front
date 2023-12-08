import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [verifyPassword, setVerifyPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO submit to server
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input className='rounded-md px-4 py-2 text-sm bg-gray-200 text-black' onChange={(e) => setEmail(e.target.value)} type='email' placeholder='E-Post' value={email} />
        <input className='rounded-md px-4 py-2 text-sm bg-gray-200 text-black' onChange={(e) => setUsername(e.target.value)} type='email' placeholder='Användarnamn' value={username} />
        <input className='rounded-md px-4 py-2 text-sm bg-gray-200 text-black' onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Lösenord' value={password} />
        <input className='rounded-md px-4 py-2 text-sm bg-gray-200 text-black' onChange={(e) => setVerifyPassword(e.target.value)} type='password' placeholder='Bekräfta lösenordet' value={verifyPassword} />
        <button className='mb-5 bg-green-700/70 hover:bg-green-600/70 rounded-md px-3 py-2 text-white'>Registrera dig</button>
      </form>
    </>
  );
};

export default Signup;
