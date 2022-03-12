import { STATUS_BUTTON_START, STATUS_BUTTON_STOP } from "./actionTypes";

export function setStatusBtnStart() {
  return {
    type: STATUS_BUTTON_START,
  };
}

export function setStatusBtnStop() {
  return {
    type: STATUS_BUTTON_STOP,
  };
}
