// actionTypes
import {
  SET_ALBUMS,
  SET_IS_SHOW_LOADING_FALSE,
  SET_IS_SHOW_LOADING_TRUE,
  SET_IS_SHOW_TOAST_TRUE,
} from "../actionTypes";
// request(axios)
import request from "../../utils/request";
/** action : request */
// options
const options = {
  url: "/albums?_limit=20",
};
/** action: fetch albums and set albums*/
export const fetchAlbums = () => {
  return async (dispatch) => {
    // request api
    try {
      // show loading
      dispatch({ type: SET_IS_SHOW_LOADING_TRUE });
      // fetch albums
      const response = await request(options);
      // condition: fetch albums success
      if (response.status === 200) {
        // set albums
        dispatch({ type: SET_ALBUMS, payload: response.data });
        // hide loading
        dispatch({ type: SET_IS_SHOW_LOADING_FALSE });
      }
    } catch (error) {
      // hide loading
      dispatch({ type: SET_IS_SHOW_LOADING_FALSE });
      // show toast
      dispatch({
        type: SET_IS_SHOW_TOAST_TRUE,
        payload: { icon: "x", text: "Failed to fetch albums." },
      });
      // console.error("#Fetch Albums Fail", error.response);
    }
  };
};
