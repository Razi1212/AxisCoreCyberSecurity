
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
  useThree,
} from "@react-three/fiber";

import * as THREE from "three";

/* =========================================
   NETWORK NODE DATA
========================================= */

function createNetworkNodes() {
  const count = 32;
  const radius = 2.25;

  return Array.from({ length: count }, (_, i) => {
    const phi = Math.acos(
      1 - (2 * (i + 0.5)) / count
    );

    const theta = Math.PI * (1 + Math.sqrt(5)) * i;

    return {
      position: [
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta),
      ],

      color: i % 5 === 0 ? "#ff3545" : "#4d9dff",

      size: i % 5 === 0 ? 0.075 : 0.045,
    };
  });
}

/* =========================================
   INSTANCED NETWORK NODES
========================================= */

function NetworkNodes({ nodes, animate }) {
  const meshRef = useRef();

  const invalidate = useThree(
    (state) => state.invalidate
  );

  useEffect(() => {
    const mesh = meshRef.current;

    if (!mesh) return;

    const dummy = new THREE.Object3D();

    nodes.forEach((node, index) => {
      dummy.position.set(...node.position);
      dummy.scale.setScalar(node.size);
      dummy.updateMatrix();

      mesh.setMatrixAt(index, dummy.matrix);

      mesh.setColorAt(
        index,
        new THREE.Color(node.color)
      );
    });

    mesh.instanceMatrix.needsUpdate = true;

    if (mesh.instanceColor) {
      mesh.instanceColor.needsUpdate = true;
    }

    invalidate();
  }, [nodes, invalidate]);

  useFrame((state, delta) => {
    if (!animate || !meshRef.current) return;

    meshRef.current.rotation.y += delta * 0.07;

    meshRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, nodes.length]}
      frustumCulled
    >
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial toneMapped={false} />
    </instancedMesh>
  );
}

/* =========================================
   NETWORK CONNECTIONS
========================================= */

function NetworkLines({ nodes }) {
  const geometry = useMemo(() => {
    const positions = [];

    const points = nodes.map(
      (node) =>
        new THREE.Vector3(...node.position)
    );

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < 1.15) {
          positions.push(
            points[i].x,
            points[i].y,
            points[i].z,
            points[j].x,
            points[j].y,
            points[j].z
          );
        }
      }
    }

    const geo = new THREE.BufferGeometry();

    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    return geo;
  }, [nodes]);

  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial
        color="#397bcf"
        transparent
        opacity={0.22}
        depthWrite={false}
      />
    </lineSegments>
  );
}

/* =========================================
   ORBIT RINGS
========================================= */

function OrbitRings({ animate }) {
  const orbitRef = useRef();

  useFrame((_, delta) => {
    if (!animate || !orbitRef.current) return;

    orbitRef.current.rotation.z += delta * 0.045;
  });

  return (
    <group ref={orbitRef}>
      <mesh rotation={[Math.PI / 2.5, 0.2, 0]}>
        <torusGeometry args={[2.8, 0.012, 5, 64]} />
        <meshBasicMaterial
          color="#d71920"
          transparent
          opacity={0.7}
        />
      </mesh>

      <mesh rotation={[0.5, Math.PI / 3, 0.5]}>
        <torusGeometry args={[3.05, 0.009, 5, 64]} />
        <meshBasicMaterial
          color="#438cff"
          transparent
          opacity={0.55}
        />
      </mesh>

      <mesh rotation={[1.2, 0.4, 0.8]}>
        <torusGeometry args={[3.25, 0.008, 5, 64]} />
        <meshBasicMaterial
          color="#438cff"
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

/* =========================================
   CENTRAL CYBER CORE
========================================= */

function CyberCore({ animate }) {
  const coreRef = useRef();

  useFrame((state) => {
    if (!animate || !coreRef.current) return;

    const pulse =
      1 +
      Math.sin(state.clock.elapsedTime * 1.5) * 0.025;

    coreRef.current.scale.setScalar(pulse);
  });

  return (
    <group ref={coreRef}>
      <mesh>
        <icosahedronGeometry args={[0.65, 1]} />
        <meshBasicMaterial
          color="#132e59"
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.28, 10, 10]} />
        <meshBasicMaterial
          color="#d71920"
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

/* =========================================
   MAIN SCENE
========================================= */

function Scene({ animate }) {
  const nodes = useMemo(
    () => createNetworkNodes(),
    []
  );

  return (
    <group position={[0.6, 0, 0]}>
      <NetworkLines nodes={nodes} />

      <NetworkNodes
        nodes={nodes}
        animate={animate}
      />

      <OrbitRings animate={animate} />

      <CyberCore animate={animate} />
    </group>
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

    return () => {
      observer.disconnect();
    };
  }, []);

  const animate = !isMobile && !reducedMotion;

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: -1,

        background: `
          radial-gradient(
            circle at 72% 48%,
            rgba(20, 48, 90, 0.42),
            transparent 38%
          ),
          linear-gradient(
            135deg,
            #03050A,
            #080F30
          )
        `,
      }}
    >
      {/* 3D CANVAS */}

      {visible && (
        <Canvas
          dpr={isMobile ? 1 : [1, 1.15]}
          frameloop={animate ? "always" : "demand"}
          gl={{
            alpha: true,
            antialias: false,
            powerPreference: "low-power",
            stencil: false,
            depth: true,
          }}
          camera={{
            position: [0, 0, 9],
            fov: 40,
          }}
        >
          <Scene animate={animate} />
        </Canvas>
      )}

      {/* LEFT TEXT READABILITY */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",

          background:
            "linear-gradient(90deg, #03050A 0%, rgba(3,5,10,0.96) 35%, rgba(3,5,10,0.45) 65%, transparent 100%)",
        }}
      />

      {/* SUBTLE GRID */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.12,

          backgroundImage: `
            linear-gradient(
              rgba(74,122,255,0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(74,122,255,0.12) 1px,
              transparent 1px
            )
          `,

          backgroundSize: "55px 55px",
        }}
      />

      {/* RED AMBIENT GLOW */}

      <div
        style={{
          position: "absolute",
          right: "12%",
          top: "35%",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "rgba(215,25,32,0.07)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
