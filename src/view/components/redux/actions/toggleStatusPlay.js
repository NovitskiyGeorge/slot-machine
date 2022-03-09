import { STATUS_GAME_START, STATUS_GAME_STOP } from "./actionTypes";

export function setStatusPlayStart() {
  return {
    type: STATUS_GAME_START,
  };
}

export function setStatusPlayStop() {
  return {
    type: STATUS_GAME_STOP,
  };
}
