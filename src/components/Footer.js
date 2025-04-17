import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // WhatsApp link with preloaded number and text
  const whatsappNumber = "1234567890"; // Replace with your WhatsApp number
  const preText = "Hello! I would like to explore synergies and early bird benefits.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(preText)}`;

  return (
    <footer id="footer" className={`w-full bg-black p-4 text-center relative ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
      <div className="space-x-4">
        <a href="#contact" className="color-text hover:underline">Contact</a>
        <a href="#legal" className="color-text hover:underline">Legal</a>
        <a href="#social" className="color-text hover:underline">Social Media</a>
      </div>
      
    </footer>
  );
};

export default Footer;