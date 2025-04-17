import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section id="home" className={`page text-center ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
      <h1 className="text-4xl md:text-6xl font-bold color-text mb-7"><br />DREAM STAGE<br /></h1>
      <h2 className="text-2xl md:text-4xl color-text mb-4">Where Dreams Take Center Stage</h2>
      <p className="text-xl md:text-2xl text-white mb-6">We are devoted to spreading happiness by turning your dreams into reality.</p>
    </section>
  );
};

export default Hero;