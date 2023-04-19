// actionTypes
import { SET_SEARCH_ID } from "../actionTypes";
// initial state
const initialState = {
  id: 0,
};
/** search reducer */
const search = (state = initialState, action) => {
  switch (action.type) {
    // set search id
    case SET_SEARCH_ID:
      return {
        id: action.payload,
      };
    default:
      return state;
  }
};
export default search;
