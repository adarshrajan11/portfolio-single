import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import InteractiveNetwork from './ProfessionalNetwork';
import hero from '../assets/AdarshU.jpeg';

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    // Scroll Listener (uncomment if you want parallax effects)
    // useEffect(() => {
    //     const handleScroll = () => setScrollY(window.scrollY);
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    const nameAnimation = useSpring({
        transform: `translateY(${scrollY * 0.3}px)`,
    });

    const descriptionAnimation = useSpring({
        transform: `translateY(${scrollY * 0.5}px)`,
    });

    return (
        <div className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 px-4 py-12 md:py-0">
            {/* Left Column - Interactive Network */}
            <div className="w-full md:w-1/2 h-[400px] md:h-full flex items-center justify-center">
                <InteractiveNetwork
                    title="My Tech Stack"
                    nodes={[
                        { id: 1, name: 'React', position: [1, 1, 0], color: '#61DAFB', size: 1.2 },
                        { id: 2, name: 'Three.js', position: [-1, 1, 0], color: '#049EF4', size: 1.1 },
                        { id: 3, name: 'Node.js', position: [0, -1, 0], color: '#68A063', size: 1 },
                        { id: 4, name: 'UI/UX', position: [1.5, 0, 0], color: '#FF4081', size: 0.9 },
                        { id: 5, name: 'Animation', position: [-1.5, 0, 0], color: '#FF9100', size: 0.9 },
                    ]}
                />
            </div>

            {/* Right Column - Personal Info */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-6">
                <animated.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-left"
                    style={nameAnimation}
                >
                    Hello, I'm <span className="text-blue-500">Adarsh Rajan</span>
                </animated.h1>

                <animated.p
                    className="text-lg md:text-xl lg:text-2xl text-center md:text-left text-gray-600 max-w-lg"
                    style={descriptionAnimation}
                >
                    A passionate frontend developer crafting beautiful web experiences.
                </animated.p>

                <div className="flex-shrink-0 relative mt-4">
                    <div className="border-animation rounded-full w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
                        <img
                            src={hero}
                            alt="Adarsh Rajan"
                            className="rounded-full w-44 h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;