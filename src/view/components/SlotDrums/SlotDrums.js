import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useSelector } from "react-redux";

export const SlotDrums = (props) => {
  const [seven, cherry, banana, slots] = useLoader(TextureLoader, [
    "./img/seven.png",
    "./img/cherry.png",
    "./img/seven.png",
    "./img/slots.png",
  ]);
  const { color } = props;
  const ref = useRef();

  // const statusGame = useSelector((state) => state.statusGame);

  // if (statusGame) {
  // }

  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  // useFrame((state, delta) => (ref.current.position.x = 1));

  // useFrame((state, delta) => (position={Vector3(-100, -200, -100)}));

  return (
    <mesh {...props} ref={ref}>
      <cylinderGeometry args={[1, 1, 2, 20]} />
      <meshStandardMaterial color={color} map={slots} />
    </mesh>
    //   <mesh {...props} ref={ref}>
    //   <boxGeometry args={[2, 2, 2]} />
    //   <meshStandardMaterial color={color} map={cherry} />
    // </mesh>
  );
};
