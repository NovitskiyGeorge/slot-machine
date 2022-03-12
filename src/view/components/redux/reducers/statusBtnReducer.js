import {
  STATUS_BUTTON_START,
  STATUS_BUTTON_STOP,
} from "../actions/actionTypes";

const initialStatus = false;

export const statusButtonReducer = (state = initialStatus, action) => {
  switch (action.type) {
    case STATUS_BUTTON_START:
      return true;
    case STATUS_BUTTON_STOP:
      return false;
    default:
      return state;
  }
};
