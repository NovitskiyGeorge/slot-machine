import { combineReducers } from "redux";
import {
  statusButtonStartReducer,
  statusButtonStopReducer,
} from "./statusBtnReducer";
import { statusGameReducer } from "./statusGameReducer";

const reducers = {
  statusGame: statusGameReducer,
  statusButtonStart: statusButtonStartReducer,
  statusButtonStop: statusButtonStopReducer,
};

const mainReducer = combineReducers(reducers);

export default mainReducer;
