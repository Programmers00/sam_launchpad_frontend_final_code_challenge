// actionTypes
import {
  SET_IS_SHOW_MODAL_TRUE,
  SET_IS_SHOW_MODAL_FALSE,
} from "../actionTypes";
/** action : show modal */
export const setIsShowModalTrue = (album) => {
  return (dispatch) => {
    dispatch({ type: SET_IS_SHOW_MODAL_TRUE, payload: album });
  };
};
/** action : hide modal */
export const setIsShowModalFalse = () => {
  return (dispatch) => {
    dispatch({ type: SET_IS_SHOW_MODAL_FALSE });
  };
};
