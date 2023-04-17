// actionTypes
import {
  SET_ALBUM_PARAMS_TITLE,
  SET_ALBUM_PARAMS_USER_ID,
  SET_ALBUM_PARAMS_ID,
  RESET_ALBUM_PARAMS,
} from "../actionTypes";
// initial state
const initialState = {
  userId: "",
  title: "",
};
/** albums reducer */
const albums = (state = initialState, action) => {
  switch (action.type) {
    // set album params title
    case SET_ALBUM_PARAMS_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    // set album params userId
    case SET_ALBUM_PARAMS_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    // add album params id
    case SET_ALBUM_PARAMS_ID:
      return {
        ...state,
        id: action.payload,
      };
    // reset album
    case RESET_ALBUM_PARAMS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
export default albums;
