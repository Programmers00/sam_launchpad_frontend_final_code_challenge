// actionTypes
import {
  SET_IS_SHOW_MODAL_TRUE,
  SET_IS_SHOW_MODAL_FALSE,
  SET_ALBUM_PARAMS_ID,
  SET_ALBUM_PARAMS_TITLE,
  SET_ALBUM_PARAMS_USER_ID,
  RESET_ALBUM_PARAMS,
} from "../actionTypes";
/** action : show modal and conditionally set params(edit => id, title, userId)*/
export const setIsShowModalTrue = (album) => {
  return (dispatch) => {
    // show modal
    dispatch({ type: SET_IS_SHOW_MODAL_TRUE, payload: album });
    // condition: when open edit modal
    if (album) {
      // set album params id
      dispatch({ type: SET_ALBUM_PARAMS_ID, payload: album.id });
      // set album params title
      dispatch({ type: SET_ALBUM_PARAMS_TITLE, payload: album.title });
      // set album params userId
      dispatch({ type: SET_ALBUM_PARAMS_USER_ID, payload: album.userId });
    }
  };
};
/** action : hide modal and reset albums params*/
export const setIsShowModalFalse = () => {
  return (dispatch) => {
    // hide modal
    dispatch({ type: SET_IS_SHOW_MODAL_FALSE });
    // reset albums params
    dispatch({ type: RESET_ALBUM_PARAMS });
  };
};
