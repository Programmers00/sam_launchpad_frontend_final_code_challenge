// actionTypes
import { SET_PAGE_ALBUMS, SET_PAGE_PHOTOS } from "../actionTypes";
// initial state
const initialState = {
  page: "albums",
};
/** page reducer */
const page = (state = initialState, action) => {
  switch (action.type) {
    // set page albums
    case SET_PAGE_ALBUMS:
      return {
        ...state,
        page: "albums",
      };
    // set page photos
    case SET_PAGE_PHOTOS:
      return {
        ...state,
        page: "photos",
      };
    default:
      return state;
  }
};
export default page;
