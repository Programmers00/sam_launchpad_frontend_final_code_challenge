// useEffect
import { useEffect } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// actions
import { setPagePhotos, fetchPhotos } from "../../store/actions";
// router useLocation state
import { useLocation } from "react-router-dom";
// components
import PhotoCard from "../../components/PhotoCard";
/** Photos page */
const Photos = () => {
  // dispatch
  const dispatch = useDispatch();
  // useSelector => photos
  const photos = useSelector((state) => state.photos);
  // useSelector => searchAlbumId
  const searchAlbumId = useSelector((state) => state.search.albumId);
  // data from router
  const { state } = useLocation();
  useEffect(() => {
    // set page photos
    dispatch(setPagePhotos());
    // fetch photos
    dispatch(
      fetchPhotos(
        // 1. check state.id <= album id from router
        // 2. check albumId ===0 (not selected) => return undefined
        // 3. albumId is slected => albumId
        state?.id ? state.id : searchAlbumId === 0 ? undefined : searchAlbumId
      )
    );
  }, []);

  return (
    <div class="w-full flex flex-wrap gap-2 flex p-10 justify-center">
      {photos.map((photo) => PhotoCard(photo))}
    </div>
  );
};
export default Photos;
