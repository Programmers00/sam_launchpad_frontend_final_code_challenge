// useEffect
import { useEffect } from "react";
// redux
import { useDispatch } from "react-redux";
// actions
import { setPagePhotos } from "../../store/actions";
// router useLocation state
import { useLocation } from "react-router-dom";

/** Photos page */
const Photos = () => {
  // dispatch
  const dispatch = useDispatch();
  // data from router
  const { state } = useLocation();
  // console.log("#state", state);
  useEffect(() => {
    // set page photos
    dispatch(setPagePhotos());
  });

  return <div>Photos</div>;
};
export default Photos;
