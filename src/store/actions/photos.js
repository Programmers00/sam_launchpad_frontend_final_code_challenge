// actionTypes
import {
  SET_IS_SHOW_LOADING_FALSE,
  SET_IS_SHOW_LOADING_TRUE,
  SET_IS_SHOW_TOAST_TRUE,
  SET_PHOTOS,
} from "../actionTypes";
// request(axios)
import request from "../../utils/request";
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
      dispatch({ type: SET_IS_SHOW_LOADING_TRUE });
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
        dispatch({ type: SET_IS_SHOW_LOADING_FALSE });
      }
    } catch (error) {
      // hide loading
      dispatch({ type: SET_IS_SHOW_LOADING_FALSE });
      // show toast
      dispatch({
        type: SET_IS_SHOW_TOAST_TRUE,
        payload: { icon: "x", text: "Failed to fetch photos." },
      });
      // console.error("#Fetch Photos Fail", error.response);
    }
  };
};
