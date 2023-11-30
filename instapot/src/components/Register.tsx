type RegisterType = {
  setRegister: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login: React.FC<RegisterType> = (props) => {
  return (
    <>
      <h1 className='text-xl'>Registrera</h1>
      <div className='border-2 p-2'>
        <dl className='grid grid-flow-row'>
          <dt>
            <label htmlFor='regusername' className='px-2'>
              Användarnamn:
            </label>
          </dt>
          <dd>
            <input type='email' placeholder='Användarnamn' name='regusername' className='border-2 px-2 py-1' />
          </dd>
          <dt className='mt-3'>
            <label htmlFor='regemail' className='px-2'>
              E-Post adress:
            </label>
          </dt>
          <dd>
            <input type='email' placeholder='E-Post adress' name='regemail' className='border-2 px-2 py-1' />
          </dd>
          <dt className='mt-3'>
            <label htmlFor='regpassword' className='px-2'>
              Lösenord:
            </label>
          </dt>
          <dd>
            <input type='password' placeholder='lösenord' name='regpassword' className='border-2 px-2 py-1' />
          </dd>
          <dt className='mt-3'>
            <label htmlFor='loginpassword' className='px-2'>
              Bekräfta lösenordet:
            </label>
          </dt>
          <dd>
            <input type='password' placeholder='lösenord' name='regpasswordcheck' className='border-2 px-2 py-1' />
          </dd>
          <dt className='mt-3'>
            <label htmlFor='regpasswordcheck' className='px-2'>
              Profil bild:
            </label>
          </dt>
          <dd>
            <input type='file' name='regimage' className='border-2 px-2 py-1' accept='image/png' />
          </dd>
          <dd className='mt-5'>
            <div className='grid grid-flow-col gap-2 align-middle justify-start'>
              <button className='bg-slate-300 border-2 rounded-md px-5 py-2'>Registrera</button>
              <button className='px-5 py-2' onClick={() => props.setRegister(false)}>
                Jag har konto
              </button>
            </div>
          </dd>
        </dl>
      </div>
    </>
  );
};

export default Login;
