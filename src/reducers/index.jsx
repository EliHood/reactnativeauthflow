import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
const rootReducer = combineReducers({
  user: authReducer,
  post: postReducer
});

export default rootReducer;
