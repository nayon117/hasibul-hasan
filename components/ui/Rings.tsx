import { useGSAP } from '@gsap/react';
import { Center, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import React, { useCallback, useRef } from 'react';
import { Mesh } from 'three';

// Define the prop types
interface RingsProps {
  position: [number, number, number]; // Ensuring position is a tuple with 3 numbers
}

const Rings: React.FC<RingsProps> = ({ position }) => {
  const refList = useRef<Mesh[]>([]); // Use Mesh[] as type for ref array

  const getRef = useCallback((mesh: Mesh | null) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture('textures/rings.png');

  // GSAP animation effect with position dependency
  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      // Set position for each mesh
      refList.current.forEach((r) => {
        r.position.set(position[0], position[1], position[2]);
      });

      // Animate the rotation of the rings
      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          refList.current.map((r) => r.rotation), // Rotate the meshes
          {
            y: `+=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,
            duration: 2.5,
            stagger: {
              each: 0.15,
            },
          },
        );
    },
    {
      dependencies: [position], // Explicitly pass the position as a dependency
    },
  );

  return (
    <Center>
      <group scale={0.5}>
        {/* Create 4 rings */}
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
