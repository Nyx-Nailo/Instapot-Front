type TListImage = {
  path: string;
};

const ListImage = ({ path }: TListImage) => {
  const replaceImage = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = "./placeholder-image.png";
  };

  return (
    <>
      <div className='border-t border-gray-200 p-1 bg-white rounded text-black'>
        <img src={path} alt='Insta-pot grid' className='rounded-md border-2 border-gray-300' onError={replaceImage} />
      </div>
    </>
  );
};

export default ListImage;
