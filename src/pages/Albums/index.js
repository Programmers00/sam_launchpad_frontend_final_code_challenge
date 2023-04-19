// components
import AlbumCard from "../../components/AlbumCard";
import Modal from "../../components/Modal";
import PopupModal from "../../components/PopupModal";
// redux
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchAlbums, setPageAlbums } from "../../store/actions";
// useEffect
import { useEffect } from "react";
// router navigate
import { useNavigate } from "react-router-dom";
/** Albums page */
const Albums = () => {
  // dispatch
  const dispatch = useDispatch();
  // useSelector => albums
  const albums = useSelector((state) => state.albums);
  // useSelector => searchId
  const searchId = useSelector((state) => state.search.id);
  // navigate
  const navigate = useNavigate();
  // useEffect => fetch ablums when mounting
  useEffect(() => {
    // set page albums
    dispatch(setPageAlbums());
    // fetch albums
    dispatch(fetchAlbums());
  }, []);
  return (
    <>
      <div className="w-full flex flex-wrap gap-2 flex p-10 justify-center">
        {albums
          // filter => search id
          .filter((album) => {
            if (searchId !== 0) {
              return album.id === searchId;
            }
            return album;
          })
          .map((album) => AlbumCard({ album, navigate, dispatch }))}
      </div>
      <Modal />
      <PopupModal />
    </>
  );
};
export default Albums;
