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
  // function onSearch
  const onSearch = (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    // conditional function
    page === "albums"
      ? dispatch(setSearchId(Number(event.target.value)))
      : dispatch(fetchPhotos(Number(event.target.value)));
  };
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="http://localhost:3000" class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            NOhBUG
          </span>
        </a>
        <div class="flex md:order-2 gap-x-2">
          <button
            // show modal
            onClick={() =>
              page === "albums"
                ? dispatch(setIsShowModalTrue())
                : dispatch(fetchPhotos())
            }
            class={`${
              page === "albums"
                ? "bg-blue-500 hover:bg-blue-700"
                : "bg-red-500 hover:bg-red-700"
            } w-20 text-white font-bold py-2 px-4 rounded-lg`}
          >
            {page === "albums" ? "Create" : "Reset"}
          </button>
          {/* small search button */}
          <button
            onClick={() => setIsShowSearchbar((prev) => !prev)} // hide, show navbar
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>
          {/* search bar */}
          <div class="relative md:block hidden">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Search icon</span>
            </div>
            <input
              onKeyPress={onSearch}
              type="number"
              id="search-navbar"
              class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={page === "albums" ? "Search Id" : "Search Album Id"}
            />
          </div>
          {/* small hamburger button */}
          <button
            onClick={() => setIsShowNavbar((prev) => !prev)} // hide, show navbar
            data-collapse-toggle="navbar-search"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span class="sr-only">Open menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* dropdown */}
        <div
          class={`items-center justify-between ${
            isShowSearchbar === true ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-search"
        >
          {/* search bar */}
          <div class="relative mt-3 md:hidden">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              onKeyPress={onSearch}
              type="number"
              id="search-navbar"
              class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={
                page === "albums" ? "Search Id" : "Search Album Id(0-100)"
              }
            />
          </div>
        </div>
        <div
          class={`items-center justify-between ${
            isShowNavbar === true ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-search"
        >
          {/* navigations */}
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                to="/"
              >
                Albums
              </Link>
            </li>
            <li>
              <Link
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
