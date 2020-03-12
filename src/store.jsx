import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import persistReduc from "./reducers";
import sagas from "./sagas";

// NEW CODE: You can also remove the redux-thunk dependency

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  persistReduc,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagas.map(sagaMiddleware.run);
const persistor = persistStore(store, () => {
  store.getState();
});

// Exports
export { store, persistor };
