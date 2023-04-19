// Link for router navigation
import { Link } from "react-router-dom";
// useState
import { useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// redux actions
import {
  fetchPhotos,
  setIsShowModalTrue,
  setSearchId,
} from "../../store/actions";
/** Header in layout */
const Header = () => {
  // handling tailwindcss
  const [isShowSearchbar, setIsShowSearchbar] = useState(false);
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  // dispatch
  const dispatch = useDispatch();
  // selector => page
  const page = useSelector((state) => state.page.page);

  /** function onSearch: search id in Alums page, fetch photos in Photos page */
  const onSearch = (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    // condition: albums page, photos page
    page === "albums"
      ? dispatch(setSearchId(Number(event.target.value)))
      : dispatch(fetchPhotos(Number(event.target.value)));
  };
  /** function onClickButton: Create button in Albums page*/
  const onClickCreate = () => {
    // show modal
    dispatch(setIsShowModalTrue());
  };
  /** function onClickReset: Reset button in Photos page*/
  const onClickReset = () => {
    // fetch photos
    dispatch(fetchPhotos());
  };
  /** function onClickHamburgeToggle: hide, show navbar (md) */
  const onClickHamburgerToggle = () => {
    // hide, show navbar
    setIsShowNavbar((prev) => !prev);
  };
  /** function onClickSearchToggle: hide, show searchBar (md) */
  const onClickSearchToggle = () => {
    // hide, show searchBar
    setIsShowSearchbar((prev) => !prev);
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="http://localhost:3000" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            NOhBUG
          </span>
        </a>
        <div className="flex md:order-2 gap-x-2">
          <button
            onClick={page === "albums" ? onClickCreate : onClickReset}
            className={`${
              page === "albums"
                ? "bg-blue-500 hover:bg-blue-700"
                : "bg-red-500 hover:bg-red-700"
            } w-20 text-white font-bold py-2 px-4 rounded-lg`}
          >
            {page === "albums" ? "Create" : "Reset"}
          </button>
          {/* search icon button - md */}
          <button
            onClick={onClickSearchToggle}
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            {/* search icon */}
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {/* search bar */}
          <div className="relative md:block hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {/* search icon */}
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              onKeyPress={onSearch}
              type="number"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={page === "albums" ? "Search Id" : "Search Album Id"}
            />
          </div>
          {/* hamburger icon button (md)*/}
          <button
            onClick={onClickHamburgerToggle}
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            {/* hamburger icon */}
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* dropdown */}
        <div
          className={`items-center justify-between ${
            isShowSearchbar === true ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-search"
        >
          {/* search bar */}
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              onKeyPress={onSearch}
              type="number"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={
                page === "albums" ? "Search Id" : "Search Album Id(0-100)"
              }
            />
          </div>
        </div>
        <div
          className={`items-center justify-between ${
            isShowNavbar === true ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-search"
        >
          {/* navigations */}
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                to="/"
              >
                Albums
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                to="/photos"
              >
                Photos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
