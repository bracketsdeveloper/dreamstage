import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section id="testimonials" className={`page text-center ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
      <h3 className="text-2xl md:text-3xl font-bold color-text mb-4">Testimonials</h3>
      <p className="text-lg md:text-xl text-white mb-4">We aim to bring a revolution in the creative economy by creating a tool for mass-collaboration</p>
      <p className="text-lg md:text-xl text-white">Let’s make the world a better and happier place</p>
    </section>
  );
};

export default TestimonialsSection;