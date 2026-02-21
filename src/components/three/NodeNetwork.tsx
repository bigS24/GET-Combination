'use client';

import { useRef, useMemo, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const NODE_COUNT = 100;
const CONNECTION_DISTANCE = 2;
const NODE_SIZE = 0.03;
const MOUSE_INFLUENCE = 0.3;

export const NodeNetwork = () => {
  const meshRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { viewport, pointer } = useThree();
  
  // Initialize node positions
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(NODE_COUNT * 3);
    const vel = new Float32Array(NODE_COUNT * 3);
    
    for (let i = 0; i < NODE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * viewport.width;
      pos[i * 3 + 1] = (Math.random() - 0.5) * viewport.height;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2;
      
      vel[i * 3] = (Math.random() - 0.5) * 0.001;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.001;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.0005;
    }
    
    return [pos, vel];
  }, [viewport]);
  
  // Line positions ref for connections
  const linePositionsRef = useRef<number[]>([]);
  
  // Animation loop
  useFrame(() => {
    if (!meshRef.current) return;
    
    const geometry = meshRef.current.geometry;
    const posAttr = geometry.getAttribute('position');
    const posArray = posAttr.array as Float32Array;
    
    // Update mouse position in world coordinates
    const mouseX = pointer.x * viewport.width * 0.5;
    const mouseY = pointer.y * viewport.height * 0.5;
    
    // Update node positions with drift and mouse influence
    for (let i = 0; i < NODE_COUNT; i++) {
      const idx = i * 3;
      
      // Drift
      posArray[idx] += velocities[idx];
      posArray[idx + 1] += velocities[idx + 1];
      posArray[idx + 2] += velocities[idx + 2];
      
      // Mouse influence (push away from cursor)
      const dx = posArray[idx] - mouseX;
      const dy = posArray[idx + 1] - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 2.5) {
        const force = (2.5 - dist) * MOUSE_INFLUENCE * 0.008;
        posArray[idx] += (dx / dist) * force;
        posArray[idx + 1] += (dy / dist) * force;
      }
      
      // Boundary wrapping
      const boundaryX = viewport.width * 0.6;
      const boundaryY = viewport.height * 0.6;
      
      if (posArray[idx] > boundaryX) posArray[idx] = -boundaryX;
      if (posArray[idx] < -boundaryX) posArray[idx] = boundaryX;
      if (posArray[idx + 1] > boundaryY) posArray[idx + 1] = -boundaryY;
      if (posArray[idx + 1] < -boundaryY) posArray[idx + 1] = boundaryY;
    }
    
    posAttr.needsUpdate = true;
    
    // Update line connections
    const linePositions: number[] = [];
    
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const idx1 = i * 3;
        const idx2 = j * 3;
        
        const dx = posArray[idx1] - posArray[idx2];
        const dy = posArray[idx1 + 1] - posArray[idx2 + 1];
        const dz = posArray[idx1 + 2] - posArray[idx2 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (dist < CONNECTION_DISTANCE) {
          linePositions.push(
            posArray[idx1], posArray[idx1 + 1], posArray[idx1 + 2],
            posArray[idx2], posArray[idx2 + 1], posArray[idx2 + 2]
          );
        }
      }
    }
    
    if (linesRef.current) {
      const lineGeometry = linesRef.current.geometry;
      lineGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
    }
  });
  
  return (
    <group>
      {/* Nodes */}
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={NODE_COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#1A1AFF"
          size={NODE_SIZE}
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>
      
      {/* Connection Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial
          color="#6666FF"
          transparent
          opacity={0.15}
        />
      </lineSegments>
    </group>
  );
};

export default NodeNetwork;
