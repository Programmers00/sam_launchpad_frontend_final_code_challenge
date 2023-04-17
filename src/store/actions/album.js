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
// create options
const createOptions = {
  url: "/albums",
  method: "post",
};
// editt options
const editOptions = {
  url: "/albums",
  method: "put",
};

/** action: create album and reset album request data */
export const createAlbum = (data) => {
  let options = createOptions;
  // condition: edit
  data.id && (options = editOptions);
  return async (dispatch) => {
    // request api
    try {
      const response = await request({
        ...options,
        // condition: edit
        ...(data.id && { url: `${options.url}/${data.id}` }),
        data,
      });
      // edit success => 200, create sucess => 201
      if (response.status === 200 || response.status === 201) {
        // reset album params
        dispatch({ type: RESET_ALBUM_PARAMS });
        // hide modal
        dispatch({ type: SET_IS_SHOW_MODAL_FALSE });
      }
    } catch (error) {
      console.error(
        `#${data.id ? "Edit" : "Create"} Album Fail`,
        error.response
      );
    }
  };
};