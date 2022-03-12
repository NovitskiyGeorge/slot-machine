import styles from "./ControlPanel.module.css";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  setStatusGameStop,
  setStatusGameStart,
} from "../redux/actions/toggleStatusGame";
import {
  setStatusBtnStart,
  setStatusBtnStop,
} from "../redux/actions/toggleStatusButton.js";
import { setStatusPlayStopTimer } from "../redux/thunk/asyncToggleStatusGame";

export const ControlPanel = () => {
  const statusButton = useSelector((state) => state.statusButton);
  const dispatch = useDispatch();

  const startGame = () => {
    dispatch(setStatusGameStart());
    dispatch(setStatusBtnStart());
    dispatch(setStatusPlayStopTimer());
  };

  const stoptGame = () => {
    dispatch(setStatusGameStop());
    dispatch(setStatusBtnStop());
  };

  return (
    <div className={styles.panel}>
      <Button
        variant="contained"
        className={styles.btn}
        disabled={statusButton}
        onClick={() => startGame()}
      >
        PLAY
      </Button>
      <Button
        variant="contained"
        className={styles.btn}
        disabled={!statusButton}
        onClick={() => stoptGame()}
      >
        STOP
      </Button>
    </div>
  );
};
