import { combineReducers } from "redux";
import { persistCombineReducers, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import authReducer from "./authReducer";
import postReducer from "./postReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,

  whitelist: ["userReducer"]
};

const postConfig = {
  key: "postReducer",
  storage: AsyncStorage
};

const rootReducer = combineReducers({
  post: persistReducer(postConfig, postReducer),
  user: authReducer
});

export default persistReducer(persistConfig, rootReducer);
