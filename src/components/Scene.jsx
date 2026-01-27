import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedStars = () => {
  const starsRef = useRef();
  
  // UseFrame hook to run code on every frame
  useFrame(({ mouse }) => {
    if (starsRef.current) {
      // Rotate based on mouse position (normalized -1 to 1)
      // Multiply to adjust sensitivity
      const targetRotationY = mouse.x * 0.1;
      const targetRotationX = mouse.y * 0.1;

      // Smoothly interpolate rotation (linear interpolation)
      starsRef.current.rotation.y = THREE.MathUtils.lerp(
        starsRef.current.rotation.y,
        targetRotationY,
        0.05 // Smoothing factor
      );
      starsRef.current.rotation.x = THREE.MathUtils.lerp(
        starsRef.current.rotation.x,
        -targetRotationX, // Invert Y for intuitive movement
        0.05
      );
    }
  });

  return (
    <Stars 
      ref={starsRef} 
      radius={100} 
      depth={50} 
      count={5000} 
      factor={4} 
      saturation={0} 
      fade 
      speed={1} 
    />
  );
};

const Scene = () => {
  return (
      <div className="w-full h-auto absolute inset-0 z-[-1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <color attach="background" args={['#000000']} />
      <AnimatedStars />
    </Canvas>
    </div>
  );
};

export default Scene;