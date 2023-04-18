// actionTypes
import { SET_PHOTOS } from "../actionTypes";
// request(axios)
import request from "../../utils/request";
import { setIsShowLoadingFalse, setIsShowLoadingTrue } from "./loading";
/** action : request */
// options
const options = {
  url: "/photos?_limit=20",
};
/** action: fetch photos and set photos*/
export const fetchPhotos = (albumId) => {
  return async (dispatch) => {
    // request api
    try {
      // show loading
      dispatch(setIsShowLoadingTrue());
      // fetch photos
      const response = await request({
        ...options,
        ...(albumId && { url: `${options.url}/&albumId=${albumId}` }),
      });
      // condition: fetch photos success
      if (response.status === 200) {
        // set photos
        dispatch({ type: SET_PHOTOS, payload: response.data });
        // hide loading
        dispatch(setIsShowLoadingFalse());
      }
    } catch (error) {
      console.error("#Fetch Photos Fail", error.response);
    }
  };
};
