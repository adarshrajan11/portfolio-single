import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

const SpinningGlobe = () => {
    const sphereRef = useRef();

    // Access mouse position via `useThree`
    const { viewport } = useThree();

    useFrame(({ mouse }) => {
        if (sphereRef.current) {
            const xFactor = mouse.x * viewport.width * 0.02;
            const yFactor = mouse.y * viewport.height * 0.02;

            sphereRef.current.rotation.y += 0.01; // Spin animation
            sphereRef.current.rotation.x = yFactor; // Mouse-driven x-axis
            sphereRef.current.rotation.z = xFactor; // Mouse-driven z-axis
        }
    });

    return (
        <Sphere ref={sphereRef} args={[1, 64, 64]}>
            <MeshDistortMaterial color="#00aaff" distort={0.4} speed={2} />
        </Sphere>
    );
};

const GlobeScene = () => {
    return (
        <div className="h-[300px] w-[300px]">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} />
                <SpinningGlobe />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default GlobeScene;
