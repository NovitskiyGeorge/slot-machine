import { combineReducers } from "redux";
import { statusButtonReducer } from "./statusBtnReducer";
import { statusGameReducer } from "./statusGameReducer";

const reducers = {
  statusGame: statusGameReducer,
  statusButton: statusButtonReducer,
};

const mainReducer = combineReducers(reducers);

export default mainReducer;
