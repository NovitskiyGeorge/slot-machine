import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { SlotDrums } from "../SlotDrums/SlotDrums";
import { useSelector, useDispatch } from "react-redux";
import {
  setStatusBtnStartOn,
  setStatusBtnStopOff,
} from "../redux/actions/toggleStatusButton.js";
import { MachineBody } from "../MachineBody";
import { Physics } from "@react-three/cannon";
import { Frame } from "../Frame/Frame";

export const DisplaySlots = () => {
  const statusGame = useSelector((state) => state.statusGame);
  const dispatch = useDispatch();

  const changeStatusButton = () => {
    dispatch(setStatusBtnStopOff());
    dispatch(setStatusBtnStartOn());
  };

  return (
    <Suspense fallback={null}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Physics>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <SlotDrums
            changeStatusButton={() => changeStatusButton()}
            statusGame={statusGame}
            position={[-2.3, 0, 0]}
            rotation={[Math.PI, 0, Math.PI / 2]}
          ></SlotDrums>
          <SlotDrums
            changeStatusButton={() => changeStatusButton()}
            statusGame={statusGame}
            position={[0, 0, 0]}
            rotation={[Math.PI, 0, Math.PI / 2]}
          ></SlotDrums>
          <SlotDrums
            changeStatusButton={() => changeStatusButton()}
            statusGame={statusGame}
            position={[2.3, 0, 0]}
            rotation={[Math.PI, 0, Math.PI / 2]}
          ></SlotDrums>
          <MachineBody />
        </Physics>
      </Canvas>
    </Suspense>
  );
};
