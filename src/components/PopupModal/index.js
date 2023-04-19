// redux
import { useSelector, useDispatch } from "react-redux";
// redux actions
import { setIsShowPopupModalFalse, deleteAlbum } from "../../store/actions";
/** PopupModal component */
const PopupModal = () => {
  // redux useSelector => isShowPopupModal
  const isShowPopupModal = useSelector(
    (state) => state.popupModal.isShowPopupModal
  );
  // redux useSelector => params for delete album
  const params = useSelector((state) => state.album);
  // redux useDispatch
  const dispatch = useDispatch();
  /** onClickYes: delete album */
  const onClickYes = (params) => {
    // delete album
    dispatch(deleteAlbum(params));
  };
  /** onClickNo: hide modal */
  const onClickNo = () => {
    // hide popup modal
    dispatch(setIsShowPopupModalFalse());
  };
  return (
    <div
      id="popupModal"
      tabIndex="-1"
      className={`fixed top-0 left-0 right-0 z-50 ${
        isShowPopupModal === true ? "" : "hidden"
      } p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center backdrop-blur-sm`}
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="p-6 text-center">
            <svg
              aria-hidden="true"
              className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this album?
            </h3>
            <button
              onClick={() => onClickYes(params)}
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Yes, I'm sure
            </button>
            <button
              onClick={onClickNo}
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopupModal;
