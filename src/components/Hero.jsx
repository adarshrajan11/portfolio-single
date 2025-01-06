import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';
import SpinningGlobe from './SppinningGlobe';
import ScrollReveal from '../hoc/ScrollReveal';
import hero from '../assets/adarsh.png';

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    // Scroll Listener
    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollY(window.scrollY);
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    // // Parallax Animations
    const nameAnimation = useSpring({
        transform: `translateY(${scrollY * 0.3}px)`,
    });

    const descriptionAnimation = useSpring({
        transform: `translateY(${scrollY * 0.5}px)`,
    });

    return (

        <div className="min-h-screen flex flex-col justify-center items-center">

            <SpinningGlobe />
            <animated.h1
                className="text-4xl md:text-6xl font-bold mb-4"
                style={nameAnimation}
            >
                Hello, I'm <span className="text-blue-500">Adarsh Rajan</span>
            </animated.h1>

            <animated.p
                className="text-lg md:text-2xl mb-6 text-center"
                style={descriptionAnimation}
            >
                A passionate frontend developer crafting beautiful web experiences.
            </animated.p>
            <div className="flex-shrink-0 mb-6 md:mb-0 relative">
                <div className="border-animation rounded-full w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                    <img
                        src={hero}
                        alt="Adarsh Rajan"
                        className="rounded-full w-44 h-44 md:w-60 md:h-60"
                    />
                </div>
            </div>
        </div>

    );
};

export default Hero;
