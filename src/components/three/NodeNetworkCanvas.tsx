'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { NodeNetwork } from './NodeNetwork';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useWebGL } from '@/hooks/useWebGL';

export const NodeNetworkCanvas = () => {
  const prefersReducedMotion = useReducedMotion();
  const hasWebGL = useWebGL();
  
  // Fallback: CSS gradient animation
  if (!hasWebGL || prefersReducedMotion) {
    return (
      <div 
        className="absolute inset-0 gradient-fallback"
        aria-hidden="true"
      />
    );
  }
  
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      dpr={[1, 2]}
      gl={{ 
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <NodeNetwork />
      </Suspense>
    </Canvas>
  );
};

export default NodeNetworkCanvas;
