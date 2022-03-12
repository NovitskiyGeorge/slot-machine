import {
  STATUS_BUTTON_START_ON,
  STATUS_BUTTON_START_OFF,
  STATUS_BUTTON_STOP_ON,
  STATUS_BUTTON_STOP_OFF,
} from "./actionTypes";

export function setStatusBtnStartOn() {
  return {
    type: STATUS_BUTTON_START_ON,
  };
}

export function setStatusBtnStartOff() {
  return {
    type: STATUS_BUTTON_START_OFF,
  };
}

export function setStatusBtnStopOn() {
  return {
    type: STATUS_BUTTON_STOP_ON,
  };
}

export function setStatusBtnStopOff() {
  return {
    type: STATUS_BUTTON_STOP_OFF,
  };
}
