import { usePlane } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export const MachineBody = () => {
  const body = useLoader(TextureLoader, "./img/body.png");

  const [ref] = usePlane(() => ({
    rotation: [0, 0, 0],
    position: [0, 0.12, 0.4],
  }));

  return (
    <mesh ref={ref}>
      <planeGeometry args={[11, 4]} />
      <meshPhysicalMaterial map={body} />
    </mesh>
  );
};
