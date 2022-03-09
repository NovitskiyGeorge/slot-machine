import { combineReducers } from "redux";
import { statusGameReducer } from "./statusGameReducer";

const reducers = {
  statusGame: statusGameReducer,
};

const mainReducer = combineReducers(reducers);

export default mainReducer;
