type LoginType = {
  setRegister: React.Dispatch<React.SetStateAction<boolean>>;
  setLoggedIn: React.Dispatch<React.SetStateAction<Boolean>>;
};

const Login: React.FC<LoginType> = (props) => {
  return (
    <>
      <h1 className='text-xl'>Logga in</h1>
      <div className='border-2 p-2'>
        <dl className='grid grid-flow-row'>
          <dt>
            <label htmlFor='loginemail' className='px-2'>
              E-Post adress:
            </label>
          </dt>
          <dd>
            <input type='email' placeholder='E-Post adress' name='loginemail' className='border-2 px-2 py-1' />
          </dd>
          <dt className='mt-3'>
            <label htmlFor='loginpassword' className='px-2'>
              Lösenord:
            </label>
          </dt>
          <dd>
            <input type='password' placeholder='Lösenord' name='loginpassword' className='border-2 px-2 py-1' />
          </dd>
          <dd className='mt-5'>
            <div className='grid grid-flow-col gap-2 align-middle justify-start'>
              <button className='bg-slate-300 border-2 rounded-md px-5 py-2' onClick={() => props.setLoggedIn(true)}>
                Logga in
              </button>
              <button className='px-5 py-2' onClick={() => props.setRegister(true)}>
                Jag vill skaffa konto
              </button>
            </div>
          </dd>
        </dl>
      </div>
    </>
  );
};

export default Login;
