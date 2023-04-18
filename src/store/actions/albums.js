// actionTypes
import { SET_ALBUMS } from "../actionTypes";
// request(axios)
import request from "../../utils/request";
// actions
import { setIsShowLoadingFalse, setIsShowLoadingTrue } from "./loading";
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
      dispatch(setIsShowLoadingTrue());
      // fetch albums
      const response = await request(options);
      // condition: fetch albums success
      if (response.status === 200) {
        // set albums
        dispatch({ type: SET_ALBUMS, payload: response.data });
        // hide loading
        dispatch(setIsShowLoadingFalse());
      }
    } catch (error) {
      console.error("#Fetch Albums Fail", error.response);
    }
  };
};
