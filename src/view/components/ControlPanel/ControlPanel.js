import styles from "./ControlPanel.module.css";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  setStatusPlayStop,
  setStatusPlayStart,
} from "../redux/actions/toggleStatusPlay";

export const ControlPanel = () => {
  const statusGame = useSelector((state) => state.statusGame);
  const dispatch = useDispatch();

  const startGame = () => {
    dispatch(setStatusPlayStart());
  };

  const stoptGame = () => {
    dispatch(setStatusPlayStop());
  };

  return (
    <div className={styles.panel}>
      <Button
        variant="contained"
        className={styles.btn}
        disabled={statusGame}
        onClick={() => startGame()}
      >
        PLAY
      </Button>
      <Button
        variant="contained"
        className={styles.btn}
        onClick={() => stoptGame()}
      >
        STOP
      </Button>
    </div>
  );
};
