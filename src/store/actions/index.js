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
import { createAlbum, deleteAlbum } from "./album";
// search
import { setSearchId } from "./search";
// page
import { setPageAlbums, setPagePhotos } from "./page";
// photos
import { fetchPhotos } from "./photos";

export {
  setIsShowModalFalse,
  setIsShowModalTrue,
  setIsShowPopupModalFalse,
  setIsShowPopupModalTrue,
  fetchAlbums,
  createAlbum,
  deleteAlbum,
  setSearchId,
  setPageAlbums,
  setPagePhotos,
  fetchPhotos,
};
