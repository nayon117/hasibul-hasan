import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import CanvasLoader from "../shared/Loading";

interface ComputersProps {
  isMobile: boolean;
}

const Computers: React.FC<ComputersProps> = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  const meshRef = useRef<THREE.Group>(null);

  // Slightly reduced scale
  const scale = isMobile ? 0.65 : 0.70;

  return (
    <group ref={meshRef}>
      <ambientLight intensity={1} /> {/* Increased intensity for overall brightness */}
      <hemisphereLight intensity={1} groundColor='#BEC1CF' />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-5, 5, -5]} intensity={1} /> {/* Increased intensity for back lighting */}
      <spotLight
        position={[-5, 5, 2]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <spotLight
        position={[5, 5, -2]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      {/* Additional back light */}
      <pointLight position={[0, 2, -5]} intensity={1} color="#ffffff" />

      <primitive
        object={computer.scene}
        scale={scale}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputersCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4} // Allow some vertical rotation
          enablePan={false}
          enableRotate={true} // Re-enable rotation
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;