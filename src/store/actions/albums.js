// actionTypes
import { SET_ALBUMS } from "../actionTypes";
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
      const response = await request(options);
      // response.status === 200 &&
      dispatch({ type: SET_ALBUMS, payload: response.data });
    } catch (error) {
      console.error("#Fetch Albums Fail", error.response);
    }
  };
};
