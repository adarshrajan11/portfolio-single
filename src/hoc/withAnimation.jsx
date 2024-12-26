import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const withAnimation = (WrappedComponent) => {
    return (props) => {
        const styles = useSpring({
            opacity: 1,
            transform: 'translateY(0)',
            from: { opacity: 0, transform: 'translateY(200px)' },
            config: { duration: 800 },
        });

        return (
            <animated.div style={styles}>
                <WrappedComponent {...props} />
            </animated.div>
        );
    };
};

export default withAnimation;
