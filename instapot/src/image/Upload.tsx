import { useState } from "react";

const Upload = () => {
  const [imagePath, setImagePath] = useState<string>("");
  const [information, setInformation] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO submit to server
  };

  return (
    <div className='flex flex-col gap-3 md:basis-9/12 bg-white p-3 rounded-md text-black'>
      <div>
        <h1 className='text-3xl mb-3'>Skapa inlägg</h1>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <div className='flex flex-row gap-3'>
          <div className='w-2/6 text-right'>
            <strong>Bild</strong>
          </div>
          <div className='flex flex-col gap-1 w-4/6'>
            <input type='text' placeholder='https://' onChange={(e) => setImagePath(e.target.value)} className='bg-gray-200 rounded-sm px-2 py-1 w-5/6' value={imagePath} />
          </div>
        </div>
        <div className='flex flex-row gap-3'>
          <div className='w-2/6 text-right'>
            <strong>Information</strong>
          </div>
          <div className='flex flex-col gap-1 w-4/6'>
            <textarea className='bg-gray-200 rounded-sm px-2 py-1 w-5/6 resize-none' onChange={(e) => setInformation(e.target.value)} rows={5} cols={5} value={information} />
          </div>
        </div>
        <div className='m-auto mt-3'>
          <button className='px-5 py-2 rounded-md bg-green-700/70 hover:bg-green-600/70 text-white'>Skapa inlägg</button>
        </div>
      </form>
    </div>
  );
};

export default Upload;
