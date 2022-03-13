import React, { useRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export const SlotDrums = (props) => {
  const { color, statusGame, changeStatusButton } = props;

  const [slots] = useLoader(TextureLoader, ["./img/slots.png"]);
  const [restRotation, setRestRotation] = useState(0);
  const [speedRotation, setSpeedRotation] = useState(0);
  const [randomSpeedRotation, setRandomSpeedRotation] = useState(
    Math.floor(Math.random() * 50)
  );

  const timerIncreaseSpeedIdRef = useRef(null);
  const timerDecreaseSpeedIdRef = useRef(null);
  const timerRestRotationRef = useRef(null);
  const ref = useRef();

  useEffect(() => {
    switch (statusGame) {
      case "start":
        increaseRotationSpeed();
        break;
      case "stop":
        decreaseRotationSpeed();
        break;
      default:
        break;
    }
  }, [statusGame]);

  useEffect(() => {
    if (statusGame === "stop" && speedRotation <= 0) {
      clearInterval(timerDecreaseSpeedIdRef.current);
      changeStatusButton();
      calcRestRotation();
    }
  }, [speedRotation]);

  useEffect(() => {
    if (restRotation > 0) {
      timerRestRotationRef.current = setInterval(() => {
        addRotation();
      }, 10);
    }
  }, [restRotation]);

  const increaseRotationSpeed = () => {
    timerIncreaseSpeedIdRef.current = setInterval(() => {
      setSpeedRotation((speedRotation) => (speedRotation += 0.01));
    }, randomSpeedRotation);
  };

  const decreaseRotationSpeed = () => {
    clearInterval(timerIncreaseSpeedIdRef.current);
    timerDecreaseSpeedIdRef.current = setInterval(() => {
      setSpeedRotation((speedRotation) => (speedRotation -= 0.01));
    }, randomSpeedRotation);
  };

  const calcRestRotation = () => {
    const currentRotationValue =
      ((ref.current.rotation.x - Math.PI) % (2 * Math.PI)) %
      ((1 / 5) * 2 * Math.PI);
    setRestRotation(
      (restRotation) =>
        (restRotation = (2 * Math.PI) / 5 - currentRotationValue)
    );
  };

  const addRotation = () => {
    setRestRotation((restRotation) => (restRotation -= 0.01));
    clearInterval(timerRestRotationRef.current);
    ref.current.rotation.x += 0.01;
  };

  useFrame((state, delta) => (ref.current.rotation.x += speedRotation));

  return (
    <mesh {...props} ref={ref}>
      <cylinderGeometry args={[1, 1, 2, 60]} />
      <meshStandardMaterial color={color} map={slots} />
    </mesh>
  );
};
