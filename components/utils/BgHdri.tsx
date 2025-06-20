import * as THREE from 'three';
import React from 'react';
import { useLoader } from '@react-three/fiber';
import { RGBELoader } from 'three-stdlib';

type RotatingHDRIBackgroundProps = {
  path: string;
  rotation?: [number, number, number];
  radius?: number;
};

export function RotatingHDRIBackground({
  path,
  rotation = [0, 0, 0],
  radius = 50,
}: RotatingHDRIBackgroundProps) {
  const texture = useLoader(RGBELoader, path);
  texture.mapping = THREE.EquirectangularReflectionMapping;

  return (
    <mesh
      rotation={new THREE.Euler(rotation[0], rotation[1], rotation[2])}
      scale={[-1, 1, 1]} // inverser la sphère pour que la face intérieure soit visible
    >
      <sphereGeometry args={[radius, 60, 40]} />
      <meshBasicMaterial
        map={texture}
        side={THREE.BackSide}
        toneMapped={false}
      />
    </mesh>
  );
}
