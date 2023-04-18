// actionTypes
import {
  SET_IS_SHOW_LOADING_TRUE,
  SET_IS_SHOW_LOADING_FALSE,
} from "../actionTypes";
// initial state
const initialState = {
  isShowLoading: false, // default: hidden
};
/** loading reducer */
const loading = (state = initialState, action) => {
  switch (action.type) {
    // show loading
    case SET_IS_SHOW_LOADING_TRUE:
      return {
        ...state,
        isShowLoading: true,
      };
    // hide loading
    case SET_IS_SHOW_LOADING_FALSE:
      return {
        ...state,
        isShowLoading: false,
      };
    default:
      return state;
  }
};
export default loading;
