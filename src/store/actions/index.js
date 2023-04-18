// modal
import { setIsShowModalFalse, setIsShowModalTrue } from "./modal";
// popupModal
import {
  setIsShowPopupModalFalse,
  setIsShowPopupModalTrue,
} from "./popupModal";
// albums
import { fetchAlbums } from "./albums";
// album
import {
  createAlbum,
  deleteAlbum,
  setAlbumParamsTitle,
  setAlbumParamsUserId,
} from "./album";
// search
import { setSearchId } from "./search";
// page
import { setPageAlbums, setPagePhotos } from "./page";
// photos
import { fetchPhotos } from "./photos";
// loading
import { setIsShowLoadingTrue, setIsShowLoadingFalse } from "./loading";

export {
  setIsShowModalFalse,
  setIsShowModalTrue,
  setIsShowPopupModalFalse,
  setIsShowPopupModalTrue,
  fetchAlbums,
  createAlbum,
  deleteAlbum,
  setAlbumParamsTitle,
  setAlbumParamsUserId,
  setSearchId,
  setPageAlbums,
  setPagePhotos,
  fetchPhotos,
  setIsShowLoadingTrue,
  setIsShowLoadingFalse,
};
