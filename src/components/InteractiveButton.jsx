import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const InteractiveButton = ({ text = 'Hire Me' }) => {
    const [isPressed, setIsPressed] = React.useState(false);

    // Animation for hover effect
    const hoverAnimation = useSpring({
        scale: isPressed ? 0.9 : 1,
        backgroundColor: isPressed ? '#2563eb' : '#3b82f6',
        config: { tension: 200, friction: 10 },
    });

    return (
        <animated.button
            style={{
                transform: hoverAnimation.scale.to((scale) => `scale(${scale})`),
                backgroundColor: hoverAnimation.backgroundColor,
            }}
            className="text-white px-6 py-3 rounded-lg font-semibold transition-shadow shadow-md hover:shadow-lg"
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
        >
            {text}
        </animated.button>
    );
};

export default InteractiveButton;
