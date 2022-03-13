import { STATUS_GAME_START, STATUS_GAME_STOP } from "../actions/actionTypes";

const initialStatus = "init";

export const statusGameReducer = (state = initialStatus, action) => {
  switch (action.type) {
    case STATUS_GAME_START:
      return "start";
    case STATUS_GAME_STOP:
      return "stop";
    default:
      return state;
  }
};
