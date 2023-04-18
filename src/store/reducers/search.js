// actionTypes
import { SET_SEARCH_ID, SET_SEARCH_ALBUM_ID } from "../actionTypes";
// initial state
const initialState = {
  id: 0, // id in Albums Page
  albumId: 0, // albumId in Photos Page
};
/** search reducer */
const search = (state = initialState, action) => {
  switch (action.type) {
    // set search id in Albums Page
    case SET_SEARCH_ID:
      return {
        ...state,
        id: action.payload,
      };
    // set search album id in Photos page
    case SET_SEARCH_ALBUM_ID:
      return {
        ...state,
        albumId: action.payload,
      };
    default:
      return state;
  }
};
export default search;
