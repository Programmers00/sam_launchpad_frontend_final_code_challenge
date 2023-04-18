/** PhotoCard component */
const PhotoCard = (album) => {
  // dispatch
  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col ">
      <div class="flex flex-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-2 gap-4 items-center">
        <div class="flex flex-1 justify-center gap-2">
          <h3>ALBUM ID</h3>
          <h3 class="border border-2 border-gray-200 rounded-lg w-12 text-center">
            {album.albumId}
          </h3>
        </div>
        <div class="flex flex-1 justify-center gap-2">
          <h3>ID</h3>
          <h3 class="border border-2 border-gray-200 rounded-lg w-20 text-center">
            {album.id}
          </h3>
        </div>
      </div>
      <img src={album.url} alt="" />
      <div class="p-5 flex items-center">
        <h5 class="flex text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {album.title}
        </h5>
        <img class="flex " src={album.thumbnailUrl} alt="" />
      </div>
    </div>
  );
};
export default PhotoCard;
