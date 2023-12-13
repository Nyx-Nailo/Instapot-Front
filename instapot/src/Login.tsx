import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/actions";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(login());
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input disabled className='hover:cursor-not-allowed rounded-md px-4 py-2 text-sm bg-gray-200 text-black' onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Demo' value={email} />
        <input disabled className='hover:cursor-not-allowed rounded-md px-4 py-2 text-sm bg-gray-200 text-black' onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Demo' value={password} />
        <button className='mb-5 bg-green-700/70 hover:bg-green-600/70 rounded-md px-3 py-2 text-white'>Logga in</button>
      </form>
    </>
  );
};

export default Login;
