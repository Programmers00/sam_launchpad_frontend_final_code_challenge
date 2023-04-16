// redux
import { useSelector, useDispatch } from "react-redux";
// redux actions
import { setIsShowModalFalse } from "../../store/actions";
/** Modal component */
const Modal = () => {
  // redux useSelector => isShowModal
  const isShowModal = useSelector((state) => state.modal.isShowModal);
  // redux useDispatch => setIsSHowModalFalse
  const dispatch = useDispatch();
  return (
    <div
      id="modal"
      tabindex="-1"
      aria-hidden="true"
      class={`fixed top-0 left-0 right-0 z-50 ${
        isShowModal === true ? "" : "hidden"
      } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center backdrop-blur-sm`}
    >
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="px-6 py-6 lg:px-8">
            <form class="space-y-6" action="#">
              <div>
                <label
                  for="title"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="title"
                  name="title"
                  id="title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="title"
                  required
                />
              </div>
              <div>
                <label
                  for="userId"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  UserId
                </label>
                <input
                  type="userId"
                  name="userId"
                  id="userId"
                  placeholder="userId"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div class="flex gap-x-1 justify-center">
                {/* Create button */}
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create
                </button>
                {/* Cancel button */}
                <button
                  type="button"
                  onClick={() => dispatch(setIsShowModalFalse())}
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
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
