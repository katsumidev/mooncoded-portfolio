import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { TextureLoader } from "three";

export const Moon = () => {
  const loader = new TextureLoader();
  const matcap = loader.load("/static/moon.jpg");

  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[12, 32, 32]} />
      <meshMatcapMaterial matcap={matcap} />
    </mesh>
  );
};
