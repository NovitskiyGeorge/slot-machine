import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { SlotDrums } from "../SlotDrums/SlotDrums";

export const DisplaySlots = () => {
  return (
    <Suspense fallback={null}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} />
        <SlotDrums
          position={[0, 0, 0]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        ></SlotDrums>
        {/* <SlotDrums color="blue" position={[0, 0, 0]}></SlotDrums>
        <SlotDrums color="gray" position={[-2, 0, 0]}></SlotDrums> */}
      </Canvas>
    </Suspense>
  );
};
