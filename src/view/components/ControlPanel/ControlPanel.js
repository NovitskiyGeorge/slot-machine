import styles from "./ControlPanel.module.css";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  setStatusGameStop,
  setStatusGameStart,
} from "../redux/actions/toggleStatusGame";
import {
  setStatusBtnStartOff,
  setStatusBtnStopOff,
  setStatusBtnStopOn,
} from "../redux/actions/toggleStatusButton.js";
import { setStatusPlayStopTimer } from "../redux/thunk/asyncToggleStatusGame";

export const ControlPanel = () => {
  const statusButtonStart = useSelector((state) => state.statusButtonStart);
  const statusButtonStop = useSelector((state) => state.statusButtonStop);
  const dispatch = useDispatch();

  const startGame = () => {
    dispatch(setStatusGameStart());
    dispatch(setStatusBtnStartOff());
    dispatch(setStatusBtnStopOn());
    dispatch(setStatusPlayStopTimer());
  };

  const stopGame = () => {
    dispatch(setStatusGameStop());
    dispatch(setStatusBtnStopOff());
  };

  return (
    <div className={styles.panel}>
      <Button
        variant="contained"
        className={styles.btn}
        disabled={statusButtonStart}
        onClick={() => startGame()}
      >
        PLAY
      </Button>
      <Button
        variant="contained"
        className={styles.btn}
        disabled={statusButtonStop}
        onClick={() => stopGame()}
      >
        STOP
      </Button>
    </div>
  );
};
