/** All redux, react-redux, redux-thunk, redux-logger */
import { createStore, combineReducers, applyMiddleware } from "redux";
// redux-thunk
import thunk from "redux-thunk";
// redux-logger
import logger from "redux-logger";
// reducers => add all reducers here
import {
  modal,
  popupModal,
  albums,
  album,
  search,
  page,
  photos,
  loading,
  toast,
} from "./reducers";
// combine reducers
const rootReducer = combineReducers({
  modal,
  popupModal,
  albums,
  album,
  search,
  page,
  photos,
  loading,
  toast,
});
// middlewares => thunk, logger
const middlewares = [thunk, logger];
// store => include all setting
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
