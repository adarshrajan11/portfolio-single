import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls, Stars, Float, Text } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

const AnimatedGlobe = () => {
    const sphereRef = useRef();
    const groupRef = useRef();
    const { viewport, mouse } = useThree();

    // Animation timeline
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 1.5 } });
        tl.fromTo(
            sphereRef.current.scale,
            { x: 0, y: 0, z: 0 },
            { x: 1, y: 1, z: 1, ease: 'elastic.out(1, 0.5)' }
        );

        tl.fromTo(
            groupRef.current.rotation,
            { y: Math.PI * 2 },
            { y: 0, ease: 'power3.out' },
            '-=1'
        );
    }, []);

    useFrame((state) => {
        if (sphereRef.current) {
            // Smooth mouse following with damping
            const targetX = mouse.x * viewport.width * 0.01;
            const targetY = mouse.y * viewport.height * 0.01;

            sphereRef.current.rotation.x = THREE.MathUtils.lerp(
                sphereRef.current.rotation.x,
                targetY,
                0.1
            );
            sphereRef.current.rotation.z = THREE.MathUtils.lerp(
                sphereRef.current.rotation.z,
                targetX,
                0.1
            );

            // Continuous rotation
            sphereRef.current.rotation.y += 0.002;

            // Pulsing effect
            sphereRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime) * 0.05;
            sphereRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime) * 0.05;
            sphereRef.current.scale.z = 1 + Math.sin(state.clock.elapsedTime) * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sphere ref={sphereRef} args={[1, 64, 64]}>
                    <MeshDistortMaterial
                        color="#3a86ff"
                        emissive="#3a86ff"
                        emissiveIntensity={0.2}
                        distort={0.5}
                        speed={1.5}
                        metalness={0.3}
                        roughness={0.2}
                        clearcoat={1}
                        clearcoatRoughness={0.2}
                    />
                </Sphere>
            </Float>
        </group>
    );
};

const GlobeScene = ({ title = "Interactive Globe" }) => {
    return (
        <div className="relative h-[400px] w-full max-w-[600px] mx-auto">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff00ff" />
                <pointLight position={[0, 0, 5]} intensity={0.5} color="#00ffff" />

                <AnimatedGlobe />

                <Stars
                    radius={100}
                    depth={50}
                    count={5000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={0.5}
                />

                <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    enableRotate={true}
                    zoomSpeed={0.5}
                    minDistance={3}
                    maxDistance={8}
                    autoRotate
                    autoRotateSpeed={0.5}
                />

                {title && (
                    <Text
                        position={[0, -2.5, 0]}
                        fontSize={0.5}
                        color="white"
                        anchorX="center"
                        anchorY="middle"
                    >
                        {title}
                    </Text>
                )}
            </Canvas>

            <style jsx global>{`
        canvas {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
      `}</style>
        </div>
    );
};

export default GlobeScene;