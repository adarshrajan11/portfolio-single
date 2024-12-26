import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import useWindowDimensions from '../hooks/useWindowDimensions';

const SpinningCube = () => {
    const { width } = useWindowDimensions();
    const size = width < 768 ? 1 : 2; // Adjust size for smaller screens

    return (
        <Canvas className="w-64 h-64">
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 1, 1]} />
            <mesh rotation={[10, 10, 0]}>
                <boxGeometry args={[size, size, size]} />
                <meshStandardMaterial color="blue" />
            </mesh>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};

export default SpinningCube;
