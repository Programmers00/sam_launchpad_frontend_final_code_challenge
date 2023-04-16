// actionTypes
import {
  SET_ALBUM_PARAMS_TITLE,
  SET_ALBUM_PARAMS_USER_ID,
  RESET_ALBUM_PARAMS,
  SET_IS_SHOW_MODAL_FALSE,
} from "../actionTypes";
// request(axios)
import request from "../../utils/request";

/** action: set album params title */
export const setAlbumParamsTitle = (title) => {
  return (dispatch) =>
    dispatch({ type: SET_ALBUM_PARAMS_TITLE, payload: title });
};
/** action: set album params user id */
export const setAlbumParamsUserId = (userId) => {
  return (dispatch) =>
    dispatch({ type: SET_ALBUM_PARAMS_USER_ID, payload: userId });
};
/** action : request */
// options
const options = {
  url: "/albums",
  method: "post",
};
/** action: create album and reset album request data */
export const createAlbum = (data) => {
  return async (dispatch) => {
    // request api
    try {
      const response = await request({ ...options, data });
      if (response.status === 201) {
        // reset album params
        dispatch({ type: RESET_ALBUM_PARAMS });
        // hide modal
        dispatch({ type: SET_IS_SHOW_MODAL_FALSE });
      }
    } catch (error) {
      console.error("#Create Album Fail", error.response);
    }
  };
};
