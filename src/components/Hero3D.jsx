
"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import * as THREE from "three";

/* =========================================
   SHIELD GEOMETRY
========================================= */

function createShieldGeometry() {
  const shape = new THREE.Shape();

  shape.moveTo(0, 2.15);
  shape.bezierCurveTo(0.7, 1.85, 1.35, 1.55, 1.65, 1.45);
  shape.lineTo(1.48, -0.15);
  shape.bezierCurveTo(1.35, -1.05, 0.65, -1.75, 0, -2.05);
  shape.bezierCurveTo(-0.65, -1.75, -1.35, -1.05, -1.48, -0.15);
  shape.lineTo(-1.65, 1.45);
  shape.bezierCurveTo(-1.35, 1.55, -0.7, 1.85, 0, 2.15);

  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.12,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: 0.055,
    bevelThickness: 0.045,
  });
}

/* =========================================
   DATA STREAMS
========================================= */

function createStreams() {
  return Array.from({ length: 18 }, (_, i) => {
    const startY = -2.8 + (i / 17) * 5.6;

    const start = new THREE.Vector3(-5.5, startY, -0.5);

    const middle = new THREE.Vector3(
      -2.8,
      startY * 0.72,
      0.1
    );

    const end = new THREE.Vector3(
      -0.85,
      startY * 0.36,
      0.1
    );

    const curve = new THREE.CatmullRomCurve3([
      start,
      middle,
      end,
    ]);

    return {
      curve,
      color: i % 5 === 0 ? "#ff3545" : "#46a6ff",
      speed: 0.12 + (i % 4) * 0.035,
      offset: i / 18,
    };
  });
}

function DataStream({ stream, animate }) {
  const particleRef = useRef();

  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(
      stream.curve,
      48,
      0.008,
      4,
      false
    );
  }, [stream]);

  useEffect(() => {
    return () => geometry.dispose();
  }, [geometry]);

  useFrame((state) => {
    if (!animate || !particleRef.current) return;

    const t =
      (state.clock.elapsedTime * stream.speed +
        stream.offset) %
      1;

    const point = stream.curve.getPointAt(t);

    particleRef.current.position.copy(point);
  });

  return (
    <group>
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color={stream.color}
          transparent
          opacity={0.28}
          depthWrite={false}
        />
      </mesh>

      <mesh ref={particleRef}>
        <sphereGeometry args={[0.035, 8, 8]} />
        <meshBasicMaterial
          color={stream.color}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

/* =========================================
   SECURITY SHIELD
========================================= */

function SecurityShield({ animate }) {
  const shieldRef = useRef();
  const innerRef = useRef();

  const geometry = useMemo(
    () => createShieldGeometry(),
    []
  );

  const edges = useMemo(
    () => new THREE.EdgesGeometry(geometry),
    [geometry]
  );

  useEffect(() => {
    return () => {
      geometry.dispose();
      edges.dispose();
    };
  }, [geometry, edges]);

  useFrame((state) => {
    if (!animate) return;

    const time = state.clock.elapsedTime;

    if (shieldRef.current) {
      shieldRef.current.rotation.y =
        Math.sin(time * 0.45) * 0.09;

      shieldRef.current.rotation.x =
        Math.sin(time * 0.35) * 0.035;

      shieldRef.current.position.y =
        Math.sin(time * 0.7) * 0.08;
    }

    if (innerRef.current) {
      const pulse =
        1 + Math.sin(time * 1.7) * 0.035;

      innerRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={shieldRef}>
      {/* TRANSPARENT GLASS SHIELD */}

      <mesh
        geometry={geometry}
        position={[0, 0, 0]}
      >
        <meshPhysicalMaterial
          color="#0b3970"
          metalness={0.45}
          roughness={0.2}
          transmission={0.22}
          transparent
          opacity={0.72}
          thickness={0.5}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* SHIELD OUTLINE */}

      <lineSegments geometry={edges}>
        <lineBasicMaterial
          color="#42baff"
          transparent
          opacity={0.9}
        />
      </lineSegments>

      {/* INNER SHIELD */}

      <mesh
        ref={innerRef}
        position={[0, 0, 0.2]}
      >
        <icosahedronGeometry args={[0.66, 1]} />

        <meshBasicMaterial
          color="#1676d8"
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* CENTRAL SECURITY CORE */}

      <mesh position={[0, 0, 0.22]}>
        <sphereGeometry args={[0.28, 24, 24]} />

        <meshBasicMaterial
          color="#d71920"
          toneMapped={false}
        />
      </mesh>

      {/* CORE GLOW RING */}

      <mesh
        position={[0, 0, 0.25]}
        rotation={[0, 0, Math.PI / 4]}
      >
        <torusGeometry args={[0.48, 0.012, 8, 64]} />

        <meshBasicMaterial
          color="#51c8ff"
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
}

/* =========================================
   SCANNING BEAM
========================================= */

function ScanningBeam({ animate }) {
  const beamRef = useRef();
  const glowRef = useRef();

  useFrame((state) => {
    if (!animate) return;

    const time = state.clock.elapsedTime;
    const y = Math.sin(time * 0.8) * 1.45;

    if (beamRef.current) {
      beamRef.current.position.y = y;
    }

    if (glowRef.current) {
      glowRef.current.position.y = y;
      glowRef.current.material.opacity =
        0.12 + Math.sin(time * 3) * 0.04;
    }
  });

  return (
    <group>
      <mesh
        ref={beamRef}
        position={[0, 0, 0.42]}
      >
        <boxGeometry args={[2.8, 0.012, 0.012]} />

        <meshBasicMaterial
          color="#ff3545"
          toneMapped={false}
        />
      </mesh>

      <mesh
        ref={glowRef}
        position={[0, 0, 0.4]}
      >
        <boxGeometry args={[2.8, 0.09, 0.015]} />

        <meshBasicMaterial
          color="#ff3545"
          transparent
          opacity={0.12}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* =========================================
   ORBITING SECURITY RINGS
========================================= */

function SecurityRings({ animate }) {
  const ringRef = useRef();

  useFrame((_, delta) => {
    if (!animate || !ringRef.current) return;

    ringRef.current.rotation.z += delta * 0.12;
    ringRef.current.rotation.x += delta * 0.025;
  });

  return (
    <group ref={ringRef}>
      <mesh rotation={[1.15, 0.2, 0.15]}>
        <torusGeometry args={[2.55, 0.009, 5, 100]} />

        <meshBasicMaterial
          color="#2388ff"
          transparent
          opacity={0.48}
        />
      </mesh>

      <mesh rotation={[0.45, 1.1, 0.4]}>
        <torusGeometry args={[2.8, 0.012, 5, 100]} />

        <meshBasicMaterial
          color="#d71920"
          transparent
          opacity={0.65}
        />
      </mesh>

      <mesh rotation={[1.3, 0.8, 0.7]}>
        <torusGeometry args={[3.05, 0.006, 5, 100]} />

        <meshBasicMaterial
          color="#48baff"
          transparent
          opacity={0.28}
        />
      </mesh>
    </group>
  );
}

/* =========================================
   FLOATING PARTICLES
========================================= */

function SecurityParticles({ animate }) {
  const particlesRef = useRef();

  const count = 100;

  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      values[i * 3] = (Math.random() - 0.5) * 11;
      values[i * 3 + 1] = (Math.random() - 0.5) * 6;
      values[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }

    return values;
  }, []);

  useFrame((_, delta) => {
    if (!animate || !particlesRef.current) return;

    particlesRef.current.rotation.y += delta * 0.015;
    particlesRef.current.rotation.z += delta * 0.008;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#5bbcff"
        size={0.022}
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* =========================================
   MAIN SCENE
========================================= */

function Scene({ animate, streams }) {
  return (
    <>
      <group position={[2.2, 0, 0]}>
        {streams.map((stream, index) => (
          <DataStream
            key={index}
            stream={stream}
            animate={animate}
          />
        ))}

        <SecurityRings animate={animate} />

        <SecurityShield animate={animate} />

        <ScanningBeam animate={animate} />
      </group>

      <SecurityParticles animate={animate} />
    </>
  );
}

/* =========================================
   HERO BACKGROUND
========================================= */

export default function Hero3D() {
  const containerRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const streams = useMemo(() => createStreams(), []);

  /* DEVICE SETTINGS */

  useEffect(() => {
    const mobileQuery = window.matchMedia(
      "(max-width: 768px)"
    );

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateSettings = () => {
      setIsMobile(mobileQuery.matches);
      setReducedMotion(motionQuery.matches);
    };

    updateSettings();

    mobileQuery.addEventListener("change", updateSettings);
    motionQuery.addEventListener("change", updateSettings);

    return () => {
      mobileQuery.removeEventListener("change", updateSettings);
      motionQuery.removeEventListener("change", updateSettings);
    };
  }, []);

  /* VIEWPORT VISIBILITY */

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "100px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const animate = !isMobile && !reducedMotion;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,

        /* IMPORTANT:
           The hero section now owns the background.
           This wrapper stays transparent. */

        background: "transparent",
      }}
    >
      {visible && (
        <Canvas
          dpr={isMobile ? 1 : [1, 1.25]}
          frameloop={animate ? "always" : "demand"}
          gl={{
            alpha: true,
            antialias: false,
            powerPreference: "low-power",
            stencil: false,
            depth: true,
          }}
          camera={{
            position: [0, 0, 10],
            fov: 40,
          }}
        >
          <Scene
            animate={animate}
            streams={streams}
          />
        </Canvas>
      )}

      {/* LEFT TEXT READABILITY */}

{/* LEFT TEXT READABILITY */}

<div
  style={{
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: `
      linear-gradient(
        90deg,
        rgba(16, 28, 44, 0.55) 0%,
        rgba(16, 28, 44, 0.40) 30%,
        rgba(16, 28, 44, 0.18) 55%,
        transparent 100%
      )
    `,
  }}
/>


      {/* SUBTLE TECH GRID */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.12,

          backgroundImage: `
            linear-gradient(
              rgba(67,153,255,0.2) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(67,153,255,0.2) 1px,
              transparent 1px
            )
          `,

          backgroundSize: "58px 58px",
        }}
      />

      {/* RED AMBIENT LIGHT */}

      <div
        style={{
          position: "absolute",
          right: "12%",
          top: "35%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "rgba(215,25,32,0.12)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      {/* BLUE AMBIENT LIGHT */}

      <div
        style={{
          position: "absolute",
          right: "28%",
          bottom: "8%",
          width: "280px",
          height: "180px",
          borderRadius: "50%",
          background: "rgba(25,115,220,0.12)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
