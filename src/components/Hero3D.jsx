"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  Float, 
  ContactShadows, 
  PerspectiveCamera, 
  Environment, 
  MeshTransmissionMaterial,
  Lightformer 
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/* ============================================
   CYBERSECURITY SERVER STACK
============================================ */
function ServerCore() {
  const groupRef = useRef();
  const shieldRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.3;
    }
    if (shieldRef.current) {
      shieldRef.current.rotation.y = Math.sin(t * 0.15) * -0.2;
    }
  });

  const nodes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const radius = 3.5 + Math.random() * 0.8;
      temp.push(
        <mesh 
          key={i} 
          position={[
            Math.cos(angle) * radius, 
            (Math.random() - 0.5) * 5, 
            Math.sin(angle) * radius
          ]}
        >
          <boxGeometry args={[0.05, 0.05, 0.05]} />
          <meshBasicMaterial 
            color={i % 4 === 0 ? "#ff3a42" : "#96c5ff"} 
            toneMapped={false} 
          />
        </mesh>
      );
    }
    return temp;
  }, []);

  return (
    <group ref={groupRef}>
      {/* SERVER STACK */}
      <group position={[0, 0, 0]}>
        {[0.7, 0, -0.7].map((y, index) => (
          <mesh key={index} position={[0, y, 0]}>
            <boxGeometry args={[1.8, 0.25, 1.4]} />
            <meshStandardMaterial 
              color="#0a1128" 
              metalness={0.9} 
              roughness={0.2} 
              envMapIntensity={1.5}
            />
            <mesh position={[0.7, 0, 0.71]}>
              <planeGeometry args={[0.1, 0.06]} />
              <meshBasicMaterial color="#ff3a42" toneMapped={false} />
            </mesh>
            <mesh position={[0.5, 0, 0.71]}>
              <planeGeometry args={[0.1, 0.06]} />
              <meshBasicMaterial color="#4a7aff" toneMapped={false} />
            </mesh>
            <mesh position={[-0.4, 0, 0.71]}>
              <planeGeometry args={[0.8, 0.05]} />
              <meshBasicMaterial color="#96c5ff" toneMapped={false} opacity={0.5} transparent />
            </mesh>
          </mesh>
        ))}
      </group>

      {/* GLASS CYBERSHIELD */}
      <mesh ref={shieldRef}>
        <octahedronGeometry args={[2.8, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.2}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.1}
          iridescence={0.5}
          iridescenceIOR={1.2}
          color="#ffffff"
          opacity={0.3}
        />
      </mesh>

      {/* FIREWALL RINGS */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.2, 0.015, 16, 100]} />
        <meshBasicMaterial color="#ff3a42" transparent opacity={0.4} toneMapped={false} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 3]}>
        <torusGeometry args={[3.4, 0.01, 16, 100]} />
        <meshBasicMaterial color="#4a7aff" transparent opacity={0.3} toneMapped={false} />
      </mesh>

      {nodes}
    </group>
  );
}

/* ============================================
   SCENE
============================================ */
function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 11]} fov={40} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />
      <directionalLight position={[-5, 5, -5]} intensity={3} color="#4a7aff" />
      <pointLight position={[0, 0, 0]} intensity={6} color="#4a7aff" distance={6} />
      <spotLight position={[0, -5, 5]} intensity={2} color="#ff3a42" angle={0.5} penumbra={1} />

      <Environment resolution={256}>
        <Lightformer form="rect" intensity={4} position={[5, 5, 5]} scale={[10, 10, 1]} color="#ffffff" />
        <Lightformer form="rect" intensity={3} position={[-5, 5, -5]} scale={[10, 10, 1]} color="#4a7aff" />
        <Lightformer form="circle" intensity={2} position={[0, -5, 5]} scale={[5, 5, 1]} color="#ff3a42" />
      </Environment>

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group scale={0.85}>
          <ServerCore />
        </group>
      </Float>

      <ContactShadows position={[0, -2.8, 0]} opacity={0.6} scale={12} blur={3} far={4} color="#000000" frames={1} />

      <EffectComposer>
        <Bloom intensity={1.5} luminanceThreshold={0.5} luminanceSmoothing={0.9} mipmapBlur />
      </EffectComposer>
    </>
  );
}

/* ============================================
   WRAPPER WITH TEXT VISIBILITY FIX
============================================ */
export default function Hero3D() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}>
      
      {/* Cyber Grid Background */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        background: `
          linear-gradient(rgba(74, 122, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(74, 122, 255, 0.03) 1px, transparent 1px),
          radial-gradient(circle at 70% 50%, #0a101d 0%, #03050A 70%)
        `,
        backgroundSize: '40px 40px, 40px 40px, 100% 100%'
      }} />
      
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ position: "absolute", inset: 0 }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      
      {/* 
        THIS IS THE TEXT VISIBILITY FIX. 
        It creates a dark gradient on the left so the servers stay bright on the right.
      */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        pointerEvents: 'none',
        background: 'linear-gradient(90deg, #03050A 0%, rgba(3, 5, 10, 0.95) 35%, transparent 65%)'
      }} />

      {/* Cinematic Grain */}
      <div style={{ 
        position: 'absolute', inset: 0, opacity: 0.04, mixBlendMode: 'overlay', pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.9'/></svg>")`,
        backgroundSize: '200px 200px'
      }} />
    </div>
  );
}