import { STATUS_GAME_START, STATUS_GAME_STOP } from "./actionTypes";

export function setStatusGameStart() {
  return {
    type: STATUS_GAME_START,
  };
}

export function setStatusGameStop() {
  return {
    type: STATUS_GAME_STOP,
  };
}
