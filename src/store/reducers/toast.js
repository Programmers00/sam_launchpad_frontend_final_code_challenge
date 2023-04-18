// actionTypes
import {
  SET_IS_SHOW_TOAST_FALSE,
  SET_IS_SHOW_TOAST_TRUE,
} from "../actionTypes";
// initial state
const initialState = {
  isShowToast: false, // default: hidden
  icon: "check",
  text: "",
};
/** toast reducer */
const toast = (state = initialState, action) => {
  switch (action.type) {
    // show toast
    case SET_IS_SHOW_TOAST_TRUE:
      return {
        ...state,
        isShowToast: true, // hide
        icon: action.payload.icon, // icon
        text: action.payload.text, // text
      };
    // hide toast
    case SET_IS_SHOW_TOAST_FALSE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
export default toast;
