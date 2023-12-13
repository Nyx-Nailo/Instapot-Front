import { useState } from "react";
import EditProfilePicture from "./comp/EditProfilePicture";

const ProfileEdit = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [verifyPassword, setVerifyPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO submit to server
  };

  const posts = {
    username: "InstaPotter_",
    profileImage: "https://cdn.pixabay.com/photo/2019/04/27/21/56/cactus-4161380_1280.jpg",
    information: "lorem lorem lorem",
    email: "a@b.c",
  };

  return (
    <div className='flex flex-col gap-3 md:basis-9/12 bg-white p-3 rounded-md text-black'>
      <div>
        <h1 className='text-3xl mb-3'>Redigera profil</h1>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-row gap-3 mb-3'>
          <div className='w-2/6 flex justify-end'>
            <img src={posts.profileImage} alt='profile of {posts.username}' className='rounded-full w-20 h-20' />
          </div>
          <div className='flex items-center w-4/6'>
            <div className='flex flex-col gap-1'>
              <span>{posts.username}</span>
              <EditProfilePicture profileImage={posts.profileImage} />
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <div className='flex flex-row gap-3'>
            <div className='w-2/6 text-right'>
              <strong>E-post</strong>
            </div>
            <div className='flex flex-col gap-1 w-4/6'>
              <input type='email' placeholder='Din nya e-post adress' onChange={(e) => setEmail(e.target.value)} disabled className='hover:cursor-not-allowed bg-gray-200 rounded-sm px-2 py-1 w-5/6' value={email} />
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <div className='w-2/6 text-right'>
              <strong>Lösenord</strong>
            </div>
            <div className='flex flex-col gap-1 w-4/6'>
              <input type='password' placeholder='Ditt nya lösenord' onChange={(e) => setPassword(e.target.value)} disabled className='hover:cursor-not-allowed bg-gray-200 rounded-sm px-2 py-1 w-5/6' value={password} />
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <div className='w-2/6 text-right'>
              <strong>Bekräfta lösenord</strong>
            </div>
            <div className='flex flex-col gap-1 w-4/6'>
              <input type='password' placeholder='Bekräfta ditt nya lösenord' onChange={(e) => setVerifyPassword(e.target.value)} disabled className='hover:cursor-not-allowed bg-gray-200 rounded-sm px-2 py-1 w-5/6' value={verifyPassword} />
            </div>
          </div>
          <div className='m-auto mt-3'>
            <button className='px-5 py-2 rounded-md bg-green-700/70 hover:bg-green-600/70 text-white'>Spara</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
