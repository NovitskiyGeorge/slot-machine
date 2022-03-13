import {
  STATUS_BUTTON_START_ON,
  STATUS_BUTTON_START_OFF,
  STATUS_BUTTON_STOP_ON,
  STATUS_BUTTON_STOP_OFF,
} from "../actions/actionTypes";

const initialStatusBtnStart = false;
const initialStatusBtnSttop = true;

export const statusButtonStartReducer = (
  state = initialStatusBtnStart,
  action
) => {
  switch (action.type) {
    case STATUS_BUTTON_START_ON:
      return false;
    case STATUS_BUTTON_START_OFF:
      return true;
    default:
      return state;
  }
};

export const statusButtonStopReducer = (
  state = initialStatusBtnSttop,
  action
) => {
  switch (action.type) {
    case STATUS_BUTTON_STOP_ON:
      return false;
    case STATUS_BUTTON_STOP_OFF:
      return true;
    default:
      return state;
  }
};
