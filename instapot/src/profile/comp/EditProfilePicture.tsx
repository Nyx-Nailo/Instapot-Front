import { useState } from "react";

type TEditProfileImage = {
  profileImage: string;
};

const EditProfilePicture = ({ profileImage }: TEditProfileImage) => {
  const [changeProfileImage, setChangeProfileImage] = useState<Boolean>(false);

  const hidden = (
    <>
      <button className='font-bold' onClick={() => setChangeProfileImage(true)}>
        Ändra profilbild
      </button>
    </>
  );

  const show = (
    <>
      <div className='flex flex-row gap-2'>
        <input type='text' placeholder={profileImage} className='bg-gray-200 rounded-sm px-2 py-1 w-5/6' disabled />
        <button className='px-4 py-1 rounded-md bg-green-700/70 hover:bg-green-600/70 text-white' onClick={() => setChangeProfileImage(false)}>
          Save
        </button>
      </div>
    </>
  );

  return changeProfileImage ? show : hidden;
};

export default EditProfilePicture;
