// redux actions
import {
  setIsShowModalTrue,
  setIsShowPopupModalTrue,
} from "../../store/actions";

/** AlbumCard component */
const AlbumCard = ({ album, navigate, dispatch }) => {
  /** function onClickEdit: Edit button */
  const onClickEdit = (event) => {
    // stop event spread to parent DOM
    event.stopPropagation();
    // show modal
    dispatch(setIsShowModalTrue(album));
  };
  /** function onClickDelete: Delete button*/
  const onClickDelete = (event) => {
    // stop event spread to parent DOM
    event.stopPropagation();
    // show popup modal
    dispatch(setIsShowPopupModalTrue(album)); // show popup modal
  };
  /** onClickAlbum */
  const onclickAlbum = () => {
    // navigate to photos page with id
    navigate("/photos", { state: { id: album.id } });
  };
  return (
    <div
      key={album.id}
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-700 hover:border-gray-600"
    >
      <div
        onClick={onclickAlbum}
        className="flex flex-col flex-colitems-center "
      >
        <div className="flex flex-1 flex-wrap text-lg font-bold tracking-tight text-gray-900 dark:text-white p-2 gap-4 items-center">
          <div className="flex flex-1 justify-center gap-2">
            <h3>USER ID</h3>
            <h3 className="border border-2 border-gray-200 rounded-lg w-12 text-center">
              {album.userId}
            </h3>
          </div>
          <div className="flex flex-1 justify-center gap-2">
            <h3>ID</h3>
            <h3 className="border border-2 border-gray-200 rounded-lg w-20 text-center">
              {album.id}
            </h3>
          </div>
        </div>
        <div className="flex p-3 items-center">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white h-28 p-2">
            {album.title}
          </h5>
          <div className="flex space-x-3 items-center min-w-24">
            <button
              onClick={onClickEdit}
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Edit
            </button>
            <button
              onClick={onClickDelete}
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AlbumCard;
