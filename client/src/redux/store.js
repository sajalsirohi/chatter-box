import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

export const store = createStore(rootReducer, applyMiddleware(logger));
export const persistor = persistStore(store);


export default {store, persistor};
