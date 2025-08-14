import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';

interface Scene3DProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  autoRotate?: boolean;
}

const Scene3D = ({ 
  children, 
  cameraPosition = [0, 0, 5],
  autoRotate = true 
}: Scene3DProps) => {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={cameraPosition} />
      <OrbitControls 
        enableZoom={false} 
        autoRotate={autoRotate}
        autoRotateSpeed={1}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
      
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />
      
      <Environment preset="sunset" />
      
      <Suspense fallback={null}>
        {children}
      </Suspense>
    </Canvas>
  );
};

export default Scene3D;