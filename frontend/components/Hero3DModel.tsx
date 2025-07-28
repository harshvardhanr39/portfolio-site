// frontend/components/Hero3DModel.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense } from 'react';

export default function Hero3DModel() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Stars />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <mesh rotation={[0, 0, 0]}>
            <torusKnotGeometry args={[1, 0.3, 100, 16]} />
            <meshStandardMaterial color="#00ffff" wireframe />
          </mesh>
          <OrbitControls autoRotate enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
