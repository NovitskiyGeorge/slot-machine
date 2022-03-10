import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useRef, useEffect } from "react";
import { SlotDrums } from "../SlotDrums/SlotDrums";
import { useSelector } from "react-redux";

export const DisplaySlots = () => {
  const statusGame = useSelector((state) => state.statusGame);

  // useEffect(() => {
  //   return () => clearInterval(timerRef.current); // очистка таймера
  // }, [statusGame]);

  // const increaseRotationSpeed = () => {
  //   timerRef.current = setInterval(() => {
  //     console.log("int");
  //   }, 1000);

  //   console.log(speedRotation);
  //   // clearInterval(timerRef.current);
  // };

  // if (statusGame) {
  //   increaseRotationSpeed();
  // } else {
  //   console.log(timerRef);
  //   clearInterval(timerRef.current);
  // }

  return (
    <Suspense fallback={null}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} />
        <SlotDrums
          statusGame={statusGame}
          position={[0, 0, 0]}
          rotation={[Math.PI, 0, Math.PI / 2]}
        ></SlotDrums>
        <SlotDrums
          statusGame={statusGame}
          position={[3, 0, 0]}
          rotation={[Math.PI, 0, Math.PI / 2]}
        ></SlotDrums>
        {/* <SlotDrums color="blue" position={[0, 0, 0]}></SlotDrums>
        <SlotDrums color="gray" position={[-2, 0, 0]}></SlotDrums> */}
      </Canvas>
    </Suspense>
  );
};
