// router useLocation state
import { useLocation } from "react-router-dom";

/** Photos page */
const Photos = () => {
  // data from router
  const { state } = useLocation();
  console.log("#state", state);

  return <div>Photos</div>;
};
export default Photos;
