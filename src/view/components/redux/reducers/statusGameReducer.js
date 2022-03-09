import { STATUS_GAME_START, STATUS_GAME_STOP } from "../actions/actionTypes";

const initialStatus = false;

export const statusGameReducer = (state = initialStatus, action) => {
  switch (action.type) {
    case STATUS_GAME_START:
      return true;
    case STATUS_GAME_STOP:
      return false;
    default:
      return state;
  }
};
