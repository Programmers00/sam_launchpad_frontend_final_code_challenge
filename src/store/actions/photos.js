// actionTypes
import { SET_PHOTOS } from "../actionTypes";
// request(axios)
import request from "../../utils/request";
/** action : request */
// options
const options = {
  url: "/photos?_limit=20",
};
/** action: fetch photos and set photos*/
export const fetchPhotos = (albumId) => {
  return async (dispatch) => {
    // request api
    try {
      const response = await request({
        ...options,
        ...(albumId && { url: `${options.url}/&albumId=${albumId}` }),
      });
      // response.status === 200 &&
      dispatch({ type: SET_PHOTOS, payload: response.data });
    } catch (error) {
      console.error("#Fetch Photos Fail", error.response);
    }
  };
};
