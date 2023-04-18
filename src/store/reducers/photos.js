// actionTypes
import { SET_PHOTOS } from "../actionTypes";
// initial state
const initialState = [
  // {
  //   albumId: 2,
  //   id: 51,
  //   title: "non sunt voluptatem placeat consequuntur rem incidunt",
  //   url: "https://via.placeholder.com/600/8e973b",
  //   thumbnailUrl: "https://via.placeholder.com/150/8e973b",
  // },
];
/** photos reducer */
const photos = (state = initialState, action) => {
  switch (action.type) {
    // set photos
    case SET_PHOTOS:
      return [...action.payload];
    default:
      return state;
  }
};
export default photos;
