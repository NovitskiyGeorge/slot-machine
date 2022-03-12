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
  const [randomSpeedRotation, setRandomSpeedRotation] = useState(
    Math.floor(Math.random() * 500)
  );

  const { color, statusGame, changeStatusButton } = props;
  const timerIncreaseSpeedIdRef = useRef(null);
  const timerDecreaseSpeedIdRef = useRef(null);
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
    if (!statusGame && speedRotation <= 0) {
      clearInterval(timerDecreaseSpeedIdRef.current);
      changeStatusButton();
    }
  }, [speedRotation]);

  const increaseRotationSpeed = () => {
    timerIncreaseSpeedIdRef.current = setInterval(() => {
      setSpeedRotation((speedRotation) => (speedRotation += (2 * Math.PI) / 5));
    }, randomSpeedRotation);
  };

  const decreaseRotationSpeed = () => {
    clearInterval(timerIncreaseSpeedIdRef.current);
    timerDecreaseSpeedIdRef.current = setInterval(() => {
      setSpeedRotation((speedRotation) => (speedRotation -= (2 * Math.PI) / 5));
    }, randomSpeedRotation);
  };

  useFrame((state, delta) => (ref.current.rotation.x += speedRotation));

  return (
    <mesh {...props} ref={ref}>
      <cylinderGeometry args={[1, 1, 2, 60]} />
      <meshStandardMaterial color={color} map={slots} />
    </mesh>
  );
};
