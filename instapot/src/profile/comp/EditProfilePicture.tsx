import { useState } from "react";

type TEditProfileImage = {
  profileImage: string;
};

const EditProfilePicture = ({ profileImage }: TEditProfileImage) => {
  const [changeProfileImage, setChangeProfileImage] = useState<Boolean>(false);
  const [profilePicture, setProfilePicture] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO submit to server

    setChangeProfileImage(false);
  };

  const hidden = (
    <>
      <button className='font-bold' onClick={() => setChangeProfileImage(true)}>
        Ändra profilbild
      </button>
    </>
  );

  const show = (
    <>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-row gap-2'>
          <input type='text' placeholder='Ange ny profil bilds länk' onChange={(e) => setProfilePicture(e.target.value)} className='bg-gray-200 rounded-sm px-2 py-1 w-5/6' value={profilePicture} />
          <button className='px-4 py-1 rounded-md bg-green-700/70 hover:bg-green-600/70 text-white'>Save</button>
        </div>
      </form>
    </>
  );

  return changeProfileImage ? show : hidden;
};

export default EditProfilePicture;
