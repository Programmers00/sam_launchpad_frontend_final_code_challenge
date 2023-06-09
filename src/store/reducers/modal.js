// actionTypes
import {
  SET_IS_SHOW_MODAL_TRUE,
  SET_IS_SHOW_MODAL_FALSE,
} from "../actionTypes";
// initial state
const initialState = {
  isShowModal: false, // default: hidden
  isCreateButton: true, // default: create button
};
/** modal reducer */
const modal = (state = initialState, action) => {
  switch (action.type) {
    // show modal
    case SET_IS_SHOW_MODAL_TRUE:
      return {
        ...state,
        isShowModal: true,
        isCreateButton: action.payload ? false : true,
      };
    // hide modal
    case SET_IS_SHOW_MODAL_FALSE:
      return {
        ...state,
        isShowModal: false,
      };
    default:
      return state;
  }
};
export default modal;
