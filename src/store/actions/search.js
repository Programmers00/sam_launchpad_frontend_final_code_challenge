// actionTypes
import { SET_SEARCH_ID } from "../actionTypes";

/** action: set search id */
export const setSearchId = (searchId) => {
  return (dispatch) => {
    // set search id
    dispatch({ type: SET_SEARCH_ID, payload: searchId });
  };
};
