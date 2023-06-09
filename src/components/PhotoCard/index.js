/** PhotoCard component */
const PhotoCard = (photo) => {
  // dispatch
  return (
    <div
      key={photo.id}
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col "
    >
      <div className="flex flex-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white p-2 gap-4 items-center flex-wrap">
        <div className="flex flex-1 justify-center gap-2">
          <h3>ALBUM ID</h3>
          <h3 className="border border-2 border-gray-200 rounded-lg w-12 text-center">
            {photo.albumId}
          </h3>
        </div>
        <div className="flex flex-1 justify-center gap-2">
          <h3>ID</h3>
          <h3 className="border border-2 border-gray-200 rounded-lg w-20 text-center">
            {photo.id}
          </h3>
        </div>
      </div>
      <img src={photo.url} alt="" />
      <div className="p-5 flex flex-row items-center items-center justify-center">
        <h5 className="flex flex-1 text-lg md:text-sm font-bold tracking-tight text-gray-900 dark:text-white h-28 overflow-y-auto ">
          {photo.title}
        </h5>
        <img src={photo.thumbnailUrl} alt="" className="flex flex-1" />
      </div>
    </div>
  );
};
export default PhotoCard;
