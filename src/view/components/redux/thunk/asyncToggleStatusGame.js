import { STATUS_GAME_STOP } from "../actions/actionTypes";

export function setStatusPlayStopTimer() {
  return function (dispatch) {
    setTimeout(() => {
      dispatch({ type: STATUS_GAME_STOP });
    }, 3000);
  };
}
