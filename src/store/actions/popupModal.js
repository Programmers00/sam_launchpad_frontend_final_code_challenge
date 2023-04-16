// actionTypes
import {
  SET_IS_SHOW_POPUP_MODAL_TRUE,
  SET_IS_SHOW_POPUP_MODAL_FALSE,
} from "../actionTypes";
/** action : show popup modal */
export const setIsShowPopupModalTrue = () => {
  return (dispatch) => {
    dispatch({ type: SET_IS_SHOW_POPUP_MODAL_TRUE });
  };
};
/** action : hide popup modal */
export const setIsShowPopupModalFalse = () => {
  return (dispatch) => {
    dispatch({ type: SET_IS_SHOW_POPUP_MODAL_FALSE });
  };
};
