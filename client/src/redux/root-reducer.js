import { combineReducers } from "redux";
import joinReducer from './join/join.reducer';

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["join"],
  };

const rootReducer = combineReducers({
    join: joinReducer
});

export default persistReducer(persistConfig, rootReducer);