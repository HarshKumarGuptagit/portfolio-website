import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random particle positions within a box
const generatePositions = (count, width, height, depth) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * width; // x
    positions[i * 3 + 1] = (Math.random() - 0.5) * height; // y
    positions[i * 3 + 2] = (Math.random() - 0.5) * depth; // z
  }
  return positions;
};

// Single zone of particles
const Zone = ({ count, color, speed, chaotic }) => {
  const ref = useRef();
  const positions = useMemo(() => generatePositions(count, 20, 10, 5), [count]);

  useFrame(() => {
    const pos = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < pos.length; i += 3) {
      // move forward along X
      pos[i] += speed;
      if (chaotic) {
        pos[i] += (Math.random() - 0.5) * 0.02;
        pos[i + 1] += (Math.random() - 0.5) * 0.02;
        pos[i + 2] += (Math.random() - 0.5) * 0.02;
      }
      // recycle when out of view
      if (pos[i] > 12) pos[i] = -12;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} limit={positions.length / 3}>
      <PointMaterial
        transparent
        size={0.07}
        color={color}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
};

const CameraRig = () => {
  const { camera } = useThree();
  useFrame(() => {
    const time = performance.now() * 0.0005;
    camera.position.y = Math.sin(time) * 0.5;
    camera.position.x = Math.sin(time * 0.3) * 0.2;
    camera.lookAt(0, 0, 0);
  });
  return null;
};

const Background = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#1a1714', width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.4} />
        <Suspense fallback={null}>
          <CameraRig />
          {/* Zone 1 – Raw / Bronze */}
          <Zone count={500} color={'#556B2F'} speed={0.015} chaotic={true} />
          {/* Zone 2 – Processing / Silver */}
          <Zone count={300} color={'#1c2e4a'} speed={0.03} chaotic={false} />
          {/* Zone 3 – Analytics‑Ready / Gold */}
          <Zone count={200} color={'#B7410E'} speed={0.045} chaotic={false} />
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background;
