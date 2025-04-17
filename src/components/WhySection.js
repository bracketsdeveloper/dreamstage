import React, { useState, useEffect } from 'react';

const WhySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section id="why" className={`page px-4 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
      <h3 className="text-3xl md:text-4xl font-bold color-text mb-4">WHY?</h3>
      <p className="text-lg md:text-xl text-white mb-4">We humans are the only species gifted with the unique signature of art, a trait that sets us apart from all other life forms.</p>
      <p className="text-lg md:text-xl text-white">Pushing the limits of human creativity and going beyond the realm of what seems possible today is how humanity is evolving.</p>
    </section>
  );
};

export default WhySection;