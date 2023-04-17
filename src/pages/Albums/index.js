// components
import AlbumCard from "../../components/AlbumCard";
import Modal from "../../components/Modal";
import PopupModal from "../../components/PopupModal";
// redux
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchAlbums } from "../../store/actions/albums";
// useEffect
import { useEffect } from "react";
/** Albums page */
const Albums = () => {
  // dispatch
  const dispatch = useDispatch();
  // useSelector
  const albums = useSelector((state) => state.albums);
  // useEffect => fetch ablums when mounting
  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);
  return (
    <>
      <div class="w-full flex flex-wrap gap-2 flex p-10 justify-center">
        {albums.map((album) => AlbumCard(album))}
      </div>
      <Modal />
      <PopupModal />
    </>
  );
};
export default Albums;
