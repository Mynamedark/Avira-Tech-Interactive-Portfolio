'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Stars, Sparkles, Float as FloatDrei, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll, useTransform } from 'framer-motion';

const Planet = ({ 
  position, 
  size, 
  color, 
  speed, 
  offset, 
  hasRings = false,
  atmosphereColor = "white",
  roughness = 0.8,
  metalness = 0.1
}: { 
  position: [number, number, number], 
  size: number, 
  color: string, 
  speed: number, 
  offset: number,
  hasRings?: boolean,
  atmosphereColor?: string,
  roughness?: number,
  metalness?: number
}) => {
  const ref = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime() * speed + offset;
      groupRef.current.position.x = Math.cos(t) * position[0];
      groupRef.current.position.z = Math.sin(t) * position[0];
    }
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group>
      {/* Orbit Path - Subtle and realistic */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[position[0] - 0.01, position[0] + 0.01, 256]} />
        <meshBasicMaterial color="white" transparent opacity={0.03} side={THREE.DoubleSide} />
      </mesh>

      <group ref={groupRef}>
        <mesh ref={ref} castShadow receiveShadow>
          <sphereGeometry args={[size, 128, 128]} />
          <meshStandardMaterial 
            color={color} 
            roughness={roughness}
            metalness={metalness}
            emissive={color}
            emissiveIntensity={0.05}
          />
          
          {/* Atmosphere Layer (Fresnel-like effect) */}
          <mesh ref={atmosphereRef} scale={1.02}>
            <sphereGeometry args={[size, 64, 64]} />
            <meshStandardMaterial 
              color={atmosphereColor} 
              transparent 
              opacity={0.2} 
              blending={THREE.AdditiveBlending}
              side={THREE.BackSide}
            />
          </mesh>
        </mesh>

        {hasRings && (
          <group rotation={[Math.PI / 2.2, 0, 0]}>
            <mesh receiveShadow castShadow>
              <ringGeometry args={[size * 1.4, size * 2.4, 128]} />
              <meshStandardMaterial 
                color="#d4d4d8" 
                transparent 
                opacity={0.5} 
                side={THREE.DoubleSide} 
                metalness={0.4}
                roughness={0.3}
              />
            </mesh>
            {/* Ring Shadow Simulation */}
            <mesh rotation={[0, 0, 0]} position={[0, 0, 0.01]}>
              <ringGeometry args={[size * 1.4, size * 2.4, 128]} />
              <meshBasicMaterial color="black" transparent opacity={0.1} side={THREE.DoubleSide} />
            </mesh>
          </group>
        )}
        
        {/* Local Point Light for subtle self-illumination */}
        <pointLight intensity={0.2} distance={size * 5} color={atmosphereColor} />
      </group>
    </group>
  );
};

const Sun = () => {
  const ref = useRef<THREE.Mesh>(null);
  const coronaRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) ref.current.rotation.y += 0.0005;
    if (coronaRef.current) {
      coronaRef.current.scale.setScalar(1.1 + Math.sin(t * 2) * 0.02);
      coronaRef.current.rotation.z -= 0.001;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Sun Core */}
      <mesh ref={ref}>
        <sphereGeometry args={[5, 128, 128]} />
        <meshBasicMaterial color="#fff5e6" />
      </mesh>
      
      {/* Inner Corona */}
      <mesh scale={1.05}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshBasicMaterial color="#ffcc00" transparent opacity={0.6} />
      </mesh>

      {/* Outer Corona / Glow */}
      <mesh ref={coronaRef} scale={1.2}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshBasicMaterial color="#ff6600" transparent opacity={0.2} blending={THREE.AdditiveBlending} />
      </mesh>

      {/* High-Intensity Light Source */}
      <pointLight intensity={150} distance={300} color="#ffaa00" decay={2} castShadow shadow-mapSize={[2048, 2048]} />
      <pointLight intensity={50} distance={100} color="#ffffff" decay={1.5} />
    </group>
  );
};

const Scene = () => {
  const { camera, mouse } = useThree();
  const { scrollYProgress } = useScroll();
  
  const zPos = useTransform(scrollYProgress, [0, 1], [80, -250]);
  const yPos = useTransform(scrollYProgress, [0, 1], [20, -50]);
  const xPos = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const rotZ = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 0.1]);

  useFrame((state) => {
    const targetX = (mouse.x * 10);
    const targetY = (-mouse.y * 10);
    
    camera.position.x += (targetX + xPos.get() - camera.position.x) * 0.015;
    camera.position.y += (targetY + yPos.get() - camera.position.y) * 0.015;
    camera.position.z += (zPos.get() - camera.position.z) * 0.04;
    
    camera.lookAt(0, 0, -60);
    camera.rotation.z = rotZ.get();
  });

  return (
    <>
      <color attach="background" args={['#000205']} />
      
      {/* Layered Starfield for Depth */}
      <Stars radius={500} depth={100} count={20000} factor={8} saturation={0} fade speed={0.3} />
      <Stars radius={200} depth={50} count={5000} factor={4} saturation={0.5} fade speed={0.1} />
      
      <Sparkles count={1000} scale={200} size={1.2} speed={0.05} opacity={0.03} color="#ffd700" />
      
      <Sun />
      
      {/* Mercury - Small, rocky, close */}
      <Planet position={[15, 0, 0]} size={0.38} color="#8c8c8c" speed={0.47} offset={0} atmosphereColor="#ffffff" roughness={0.9} />
      
      {/* Venus - Thick atmosphere, yellowish */}
      <Planet position={[22, 0, 0]} size={0.95} color="#e3bb76" speed={0.35} offset={1.2} atmosphereColor="#ffcc33" roughness={0.4} />
      
      {/* Earth - Blue, life, atmosphere */}
      <Planet position={[32, 0, 0]} size={1.0} color="#1a3a8a" speed={0.29} offset={2.5} atmosphereColor="#4da6ff" roughness={0.6} />
      
      {/* Mars - Red, dusty */}
      <Planet position={[42, 0, 0]} size={0.53} color="#993322" speed={0.24} offset={4.0} atmosphereColor="#ff4422" roughness={0.8} />
      
      {/* Jupiter - Massive, gas giant */}
      <Planet position={[65, 0, 0]} size={2.5} color="#c99039" speed={0.13} offset={0.8} atmosphereColor="#fb923c" roughness={0.3} />
      
      {/* Saturn - Rings, golden */}
      <Planet position={[90, 0, 0]} size={2.1} color="#ceb8b8" speed={0.09} offset={2.2} hasRings={true} atmosphereColor="#eab308" roughness={0.3} />
      
      {/* Uranus - Ice giant, cyan */}
      <Planet position={[115, 0, 0]} size={1.4} color="#b5e3e3" speed={0.06} offset={3.8} atmosphereColor="#22d3ee" roughness={0.2} />
      
      {/* Neptune - Deep blue, ice giant */}
      <Planet position={[135, 0, 0]} size={1.3} color="#3f54ba" speed={0.05} offset={5.2} atmosphereColor="#3b82f6" roughness={0.2} />

      {/* Asteroid Belt - Denser and more varied */}
      <Points positions={new Float32Array([...Array(400)].flatMap(() => {
        const r = 50 + Math.random() * 8;
        const theta = Math.random() * Math.PI * 2;
        return [Math.cos(theta) * r, (Math.random() - 0.5) * 3, Math.sin(theta) * r];
      }))}>
        <PointMaterial transparent color="#666666" size={0.12} sizeAttenuation={true} depthWrite={false} />
      </Points>

      {/* Ambient Light for subtle visibility of dark sides */}
      <ambientLight intensity={0.02} />
    </>
  );
};

export const UniverseBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#000205]">
      <Canvas 
        camera={{ position: [0, 30, 80], fov: 50 }} 
        shadows 
        gl={{ antialias: true, toneMapping: THREE.ReinhardToneMapping }}
      >
        <Scene />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,2,5,0.8)_100%)]" />
    </div>
  );
};
