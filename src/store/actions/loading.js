// actionTypes
import {
  SET_IS_SHOW_LOADING_FALSE,
  SET_IS_SHOW_LOADING_TRUE,
} from "../actionTypes";
/** action : show loading */
export const setIsShowLoadingTrue = () => {
  return (dispatch) => {
    // show loading
    dispatch({ type: SET_IS_SHOW_LOADING_TRUE });
  };
};
/** action : hide loading */
export const setIsShowLoadingFalse = () => {
  return (dispatch) => {
    // hide loading
    dispatch({ type: SET_IS_SHOW_LOADING_FALSE });
  };
};
