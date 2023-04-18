// actionTypes
import { SET_ALBUMS } from "../actionTypes";
// initial state
const initialState = [
  // {
  //   userId: null,
  //   id: null,
  //   title: "",
  // },
];
/** albums reducer */
const albums = (state = initialState, action) => {
  switch (action.type) {
    // set albums
    case SET_ALBUMS:
      return [...action.payload];
    default:
      return state;
  }
};
export default albums;
