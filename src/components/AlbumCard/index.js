// redux
import { useDispatch } from "react-redux";
// redux actions
import {
  setIsShowModalTrue,
  setIsShowPopupModalTrue,
} from "../../store/actions";

/** AlbumCard component */
const AlbumCard = (album, navigate) => {
  // dispatch
  const dispatch = useDispatch();
  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-400 hover:border-gray-300">
      <div
        // navigate to photos page with id
        onClick={() => navigate("/photos", { state: { id: album.id } })}
        class="flex flex-col p-5 items-center "
      >
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white h-24">
          {album.title}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{album.id}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
          <button
            onClick={() => dispatch(setIsShowModalTrue(album))}
            type="button"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(setIsShowPopupModalTrue(album))}
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default AlbumCard;
