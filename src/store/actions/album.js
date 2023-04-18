// actionTypes
import {
  SET_ALBUM_PARAMS_TITLE,
  SET_ALBUM_PARAMS_USER_ID,
  RESET_ALBUM_PARAMS,
  SET_IS_SHOW_MODAL_FALSE,
  SET_IS_SHOW_POPUP_MODAL_FALSE,
  SET_IS_SHOW_TOAST_TRUE,
} from "../actionTypes";
// request(axios)
import request from "../../utils/request";

import { fetchAlbums } from "./index";

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
// edit options
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
      // condition: edit success => 200, create sucess => 201
      if (response.status === 200 || response.status === 201) {
        // reset album params
        dispatch({ type: RESET_ALBUM_PARAMS });
        // hide modal
        dispatch({ type: SET_IS_SHOW_MODAL_FALSE });
        // show toast
        dispatch({
          type: SET_IS_SHOW_TOAST_TRUE,
          payload: {
            icon: "check",
            // condition: 201 => created, 200 => updated
            text: `Your album has been ${
              response.status === 201 ? "created" : "updated"
            } successfully.`,
          },
        });
        // re-fetch albums has changed
        dispatch(fetchAlbums());
      }
    } catch (error) {
      // reset album params
      dispatch({ type: RESET_ALBUM_PARAMS });
      // hide modal
      dispatch({ type: SET_IS_SHOW_MODAL_FALSE });
      // show toast
      dispatch({
        type: SET_IS_SHOW_TOAST_TRUE,
        payload: {
          icon: "warning",
          // condition: data.id => update, not => create
          text: `Album ${data.id ? "update" : "creation"} failed.`,
        },
      });
      // console.error(
      //   `#${data.id ? "Edit" : "Create"} Album Fail`,
      //   error.response
      // );
    }
  };
};

// delete options
const deleteOptions = {
  url: "/albums",
  method: "delete",
};

/** action: delete album */
export const deleteAlbum = (data) => {
  return async (dispatch) => {
    // request api
    try {
      const response = await request({
        ...deleteOptions,
        url: `${deleteOptions.url}/${data.id}`,
      });
      if (response.status === 200) {
        // reset album params
        dispatch({ type: RESET_ALBUM_PARAMS });
        // hide popup modal
        dispatch({ type: SET_IS_SHOW_POPUP_MODAL_FALSE });
        // show toast
        dispatch({
          type: SET_IS_SHOW_TOAST_TRUE,
          payload: {
            icon: "check",
            text: "The album has been successfully deleted.",
          },
        });
      }
      // re-fetch albums has changed
      dispatch(fetchAlbums());
    } catch (error) {
      // reset album params
      dispatch({ type: RESET_ALBUM_PARAMS });
      // hide popup modal
      dispatch({ type: SET_IS_SHOW_POPUP_MODAL_FALSE });
      // show toast
      dispatch({
        type: SET_IS_SHOW_TOAST_TRUE,
        payload: {
          icon: "x",
          text: "Album deletion failed.",
        },
      });
      // console.error("#Delete Album Fail", error.response);
    }
  };
};
