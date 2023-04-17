// actionTypes
import {
  SET_IS_SHOW_POPUP_MODAL_TRUE,
  SET_IS_SHOW_POPUP_MODAL_FALSE,
  SET_ALBUM_PARAMS_ID,
  RESET_ALBUM_PARAMS,
} from "../actionTypes";
/** action : show popup modal */
export const setIsShowPopupModalTrue = (album) => {
  return (dispatch) => {
    // show popup modal
    dispatch({ type: SET_IS_SHOW_POPUP_MODAL_TRUE });
    // set album params id for delete
    dispatch({ type: SET_ALBUM_PARAMS_ID, payload: album.id });
  };
};
/** action : hide popup modal */
export const setIsShowPopupModalFalse = () => {
  return (dispatch) => {
    // hide popup modal
    dispatch({ type: SET_IS_SHOW_POPUP_MODAL_FALSE });
    // reset albums params
    dispatch({ type: RESET_ALBUM_PARAMS });
  };
};
