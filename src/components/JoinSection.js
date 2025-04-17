import React, { useState, useEffect } from 'react';

const JoinSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section id="join" className={`page text-center ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
      <h3 className="text-2xl md:text-3xl font-bold color-text mb-4">Are you a Business or a Community or an Artist?</h3>
      <p className="text-lg md:text-xl text-white mb-4">Join the Queue here for exploring synergies and early bird benefits → <a href="https://wa.me/yourwhatsappnumber" className="color-text underline">Whatsapp</a></p>
    </section>
  );
};

export default JoinSection;