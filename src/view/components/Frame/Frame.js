import { usePlane } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export const Frame = () => {
  const frame = useLoader(TextureLoader, "./img/frame3.png");

  const [ref] = usePlane(() => ({
    rotation: [0, 0, 0],
    position: [-1.1, 0, 1],
  }));

  return (
    <mesh ref={ref}>
      <planeGeometry args={[0.23, 1.8]} />
      <meshStandardMaterial map={frame} />
    </mesh>
  );
};
