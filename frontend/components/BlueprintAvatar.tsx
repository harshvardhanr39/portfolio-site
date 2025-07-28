'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

export default function BlueprintAvatar() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />

      <Sphere args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#00BFFF"
          attach="material"
          distort={0.3}
          speed={2}
          wireframe
        />
      </Sphere>
    </Canvas>
  );
}
