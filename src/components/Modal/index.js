// redux
import { useSelector, useDispatch } from "react-redux";
// redux actions
import {
  setIsShowModalFalse,
  createAlbum,
  setAlbumParamsTitle,
  setAlbumParamsUserId,
} from "../../store/actions";
/** Modal component */
const Modal = () => {
  // redux useDispatch
  const dispatch = useDispatch();

  // redux useSelector => isShowModal
  const isShowModal = useSelector((state) => state.modal.isShowModal);
  // redux useSelector => isCreateButton
  const isCreateButton = useSelector((state) => state.modal.isCreateButton);
  // redux useSelector => album params title
  const title = useSelector((state) => state.album.title);
  // redux useSelector => album params userId
  const userId = useSelector((state) => state.album.userId);

  // redux useSelector => params for create or edit album
  const params = useSelector((state) => state.album);

  /** function onClickSave: create album or update album */
  const onClickSave = (event) => {
    event.preventDefault();
    // create album or update album
    dispatch(createAlbum(params));
  };
  /** function onClickCancel: hide modal */
  const onClickCancel = () => {
    // hide modal
    dispatch(setIsShowModalFalse());
  };
  /** function onChangeTitle: change album title params */
  const onChangeTitle = (event) => {
    // change album title params
    dispatch(setAlbumParamsTitle(event.target.value));
  };
  /** function onChangeUserId: change album userId params */
  const onChangeUserId = (event) => {
    // change album userId params
    dispatch(setAlbumParamsUserId(event.target.value));
  };
  return (
    <div
      id="modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-50 ${
        isShowModal === true ? "" : "hidden"
      } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center backdrop-blur-sm`}
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="px-6 py-6 lg:px-8">
            <form className="space-y-6" onSubmit={onClickSave}>
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="title"
                  required
                  value={title}
                  onChange={onChangeTitle}
                />
              </div>
              <div>
                <label
                  htmlFor="userId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  UserId
                </label>
                <input
                  id="userId"
                  name="userId"
                  type="number"
                  placeholder="userId"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  value={userId}
                  onChange={onChangeUserId}
                />
              </div>
              <div className="flex gap-x-1 justify-center">
                {/* Save button */}
                <button
                  // onSubmit in form
                  type="submit"
                  className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none ${
                    // condition: from Create button => blue, from Edit button => green
                    isCreateButton === true
                      ? "bg-blue-700 hover:bg-blue-800  focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      : "bg-green-700 hover:bg-green-800  focus:ring-green-300  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  }`}
                >
                  Save
                </button>
                {/* Cancel button */}
                <button
                  type="button"
                  onClick={onClickCancel}
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
