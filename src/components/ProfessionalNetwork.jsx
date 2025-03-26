import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/svg/animation.json';

const ProfessionalNetwork = () => {
  return (
    <section className="w-full h-[500px] flex items-center justify-center">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </section>
  );
};

export default ProfessionalNetwork;