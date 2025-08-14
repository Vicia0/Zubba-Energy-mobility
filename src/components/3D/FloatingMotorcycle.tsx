import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Text3D, Float } from '@react-three/drei';
import { Group, Mesh } from 'three';

const FloatingMotorcycle = () => {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef} scale={[0.8, 0.8, 0.8]}>
        {/* Simple motorcycle representation using basic shapes */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 0.5, 0.3]} />
          <meshStandardMaterial color="#2d4a2b" />
        </mesh>
        
        {/* Wheels */}
        <mesh position={[1.2, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[-1.2, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        
        {/* Handlebars */}
        <mesh position={[0.8, 0.3, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.8]} />
          <meshStandardMaterial color="#333" />
        </mesh>
        
        {/* Seat */}
        <mesh position={[-0.3, 0.3, 0]}>
          <boxGeometry args={[0.8, 0.2, 0.4]} />
          <meshStandardMaterial color="#4a4a4a" />
        </mesh>
      </group>
    </Float>
  );
};

export default FloatingMotorcycle;