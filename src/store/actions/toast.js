// actionTypes
import {
  SET_IS_SHOW_TOAST_FALSE,
  SET_IS_SHOW_TOAST_TRUE,
} from "../actionTypes";
/** action : show toast */
export const setIsShowToastTrue = (data) => {
  return (dispatch) => {
    // show toast
    dispatch({ type: SET_IS_SHOW_TOAST_TRUE, payload: data });
  };
};
/** action : hide toast */
export const setIsShowToastFalse = () => {
  return (dispatch) => {
    // hide toast
    dispatch({ type: SET_IS_SHOW_TOAST_FALSE });
  };
};
