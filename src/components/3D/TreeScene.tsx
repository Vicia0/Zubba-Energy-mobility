import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere } from '@react-three/drei';
import { Group } from 'three';

const Tree = ({ position }: { position: [number, number, number] }) => {
  const treeRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (treeRef.current) {
      treeRef.current.rotation.z = Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });

  return (
    <group ref={treeRef} position={position}>
      {/* Trunk */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Leaves */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.8]} />
          <meshStandardMaterial color="#228B22" />
        </mesh>
      </Float>
    </group>
  );
};

const TreeScene = () => {
  return (
    <>
      <Tree position={[-2, 0, -1]} />
      <Tree position={[2, 0, 1]} />
      <Tree position={[0, 0, -2]} />
      <Tree position={[-1, 0, 2]} />
      <Tree position={[3, 0, -0.5]} />
      
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Float key={i} speed={0.5 + Math.random()} rotationIntensity={0.2}>
          <Sphere
            position={[
              (Math.random() - 0.5) * 10,
              Math.random() * 3,
              (Math.random() - 0.5) * 10
            ]}
            args={[0.02]}
          >
            <meshStandardMaterial color="#90EE90" transparent opacity={0.6} />
          </Sphere>
        </Float>
      ))}
    </>
  );
};

export default TreeScene;