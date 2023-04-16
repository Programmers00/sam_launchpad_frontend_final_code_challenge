// actionTypes
import {
  SET_IS_SHOW_POPUP_MODAL_TRUE,
  SET_IS_SHOW_POPUP_MODAL_FALSE,
} from "../actionTypes";
// initial state
const initialState = {
  isShowPopupModal: false, // default: hidden
};
/** modal reducer */
const modal = (state = initialState, action) => {
  switch (action.type) {
    // show popupModal
    case SET_IS_SHOW_POPUP_MODAL_TRUE:
      return {
        ...state,
        isShowPopupModal: true,
      };
    // hide popupModal
    case SET_IS_SHOW_POPUP_MODAL_FALSE:
      return {
        ...state,
        isShowPopupModal: false,
      };
    default:
      return state;
  }
};
export default modal;
