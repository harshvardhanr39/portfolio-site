'use client';
import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function RotatingRing({ radius, thickness, speed, color, axis = 'y' }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation[axis] += delta * speed;
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <torusGeometry args={[radius, thickness, 64, 100]} />
      <meshStandardMaterial
        color={color}
        wireframe
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function MorphingSphere({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta;
    const t = timeRef.current;
    if (meshRef.current) {
      const scaleX = 1 + 0.2 * Math.sin(t * 2);
      const scaleY = 1 + 0.2 * Math.cos(t * 3);
      const scaleZ = 1 + 0.2 * Math.sin(t * 1.5);
      meshRef.current.scale.set(scaleX, scaleY, scaleZ);
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={color}
        wireframe
        emissive={color}
        emissiveIntensity={0.6}
      />
    </mesh>
  );
}

function WaveRing({ radius, segments, color, speed }: { radius: number; segments: number; color: string; speed: number }) {
  const lineRef = useRef<THREE.Line>(null);
  const pointsRef = useRef<THREE.Vector3[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    pointsRef.current = new Array(segments).fill(0).map((_, i) => {
      const angle = (i / segments) * Math.PI * 2;
      return new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        0
      );
    });
  }, [radius, segments]);

  useFrame((_, delta) => {
    timeRef.current += delta * speed;
    if (lineRef.current) {
      const newPoints = pointsRef.current.map((p, i) => {
        const offset = Math.sin(timeRef.current + i * 0.2) * 0.1;
        return new THREE.Vector3(p.x, p.y, offset);
      });
      lineRef.current.geometry.setFromPoints(newPoints);
    }
  });

  return (
    <line ref={lineRef}>
      <bufferGeometry />
      <lineBasicMaterial color={color} linewidth={2} />
    </line>
  );
}

function JarvisVisuals({ color }: { color: string }) {
  return (
    <>
      {/* Rotating rings with variation */}
      {[1.2, 1.5, 1.8, 1.4, 1.4, 1.7, 2.0, 2.0, 2.2, 2.2, 2.2].map((r, i) => (
        <RotatingRing
          key={`ring-${i}`}
          radius={r}
          thickness={0.01 + (i % 5) * 0.02}
          speed={((i % 2 === 0 ? 1 : -1) * (0.3 + i * 0.1))}
          color={color}
          axis={['x', 'y', 'z'][i % 3]}
        />
      ))}

      {/* Wave rings at various radii */}
      <WaveRing radius={1.3} segments={100} color={color} speed={2.5} />
      <WaveRing radius={1.5} segments={120} color={color} speed={2.1} />
      <WaveRing radius={1.7} segments={180} color={color} speed={1.9} />
      <WaveRing radius={1.9} segments={160} color={color} speed={1.5} />
      <WaveRing radius={2.1} segments={140} color={color} speed={1.2} />


      {/* Central morphing sphere */}
      <MorphingSphere color={color} />
    </>
  );
}

export default function BlueprintAvatar() {
  const [color, setColor] = useState('#0077ff');

  useEffect(() => {
    const matchDark = window.matchMedia('(prefers-color-scheme: dark)');
    const updateColor = (e: MediaQueryListEvent | MediaQueryList) => {
      setColor(e.matches ? '#00ff88' : '#0077ff');
    };
    updateColor(matchDark);
    matchDark.addEventListener('change', updateColor);
    return () => matchDark.removeEventListener('change', updateColor);
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 4, 2]} intensity={1} castShadow />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />

      {/* Optional: Floor shadow */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.2} />
      </mesh>

      {/* Jarvis-style visuals */}
      <JarvisVisuals color={color} />
    </Canvas>
  );
}
