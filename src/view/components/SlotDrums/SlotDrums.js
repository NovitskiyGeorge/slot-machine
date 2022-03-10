import React, { useRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export const SlotDrums = (props) => {
  const [seven, cherry, banana, slots] = useLoader(TextureLoader, [
    "./img/seven.png",
    "./img/cherry.png",
    "./img/seven.png",
    "./img/slots.png",
  ]);
  const { color, statusGame } = props;
  const timerIncreaseSpeedRef = useRef(null);
  const timerDecreaseSpeedRef = useRef(null);
  const ref = useRef();

  const [speedRotation, setSpeedRotation] = useState(0);

  useEffect(() => {
    if (statusGame) {
      increaseRotationSpeed();
    } else {
      decreaseRotationSpeed();
    }
  }, [statusGame]);

  useEffect(() => {
    console.log(ref.current.rotation.x);
    if (speedRotation <= 0) {
      clearInterval(timerDecreaseSpeedRef.current);
    }
  }, [speedRotation]);

  const increaseRotationSpeed = () => {
    timerIncreaseSpeedRef.current = setInterval(() => {
      setSpeedRotation((speedRotation) => (speedRotation += (2 * Math.PI) / 5));
      // setSpeedRotation((speedRotation) => (speedRotation += 0.01));
    }, 500);
  };

  const decreaseRotationSpeed = () => {
    clearInterval(timerIncreaseSpeedRef.current);
    timerDecreaseSpeedRef.current = setInterval(() => {
      setSpeedRotation((speedRotation) => (speedRotation -= (2 * Math.PI) / 5));
    }, 500);
  };

  useFrame(
    (state, delta) =>
      // console.log(ref.current),
      (ref.current.rotation.x += speedRotation)
    // if(ref.current.rotation.x && !speedRotation) {

    // }
  );

  return (
    <mesh {...props} ref={ref}>
      <cylinderGeometry args={[1, 1, 2, 60]} />
      <meshStandardMaterial color={color} map={slots} />
    </mesh>
  );
};
