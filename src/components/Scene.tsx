import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Character from "./Character";

const Scene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      
      {/* 3D Character - Now correctly passing props */}
      <Character scale={3} position={[-1.5, -2, 0]} />

      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
