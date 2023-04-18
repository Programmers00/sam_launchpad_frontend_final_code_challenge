// actionTypes
import { SET_PAGE_ALBUMS, SET_PAGE_PHOTOS } from "../actionTypes";

/** action: set page albums */
export const setPageAlbums = () => {
  return (dispatch) => {
    // set page albums
    dispatch({ type: SET_PAGE_ALBUMS });
  };
};

/** action: set page photos */
export const setPagePhotos = () => {
  return (dispatch) => {
    // set page photos
    dispatch({ type: SET_PAGE_PHOTOS });
  };
};
