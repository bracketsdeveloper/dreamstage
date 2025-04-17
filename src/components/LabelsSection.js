import React, { useState, useEffect } from 'react';

const LabelsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  const labels = [
    { text: "Artist-First Approach – Prioritizing fair opportunities, recognition, and sustainable careers for creative professionals.", icon: "fa-users" },
    // { text: "Community-Driven Collaboration – Bridging the gap between artists and businesses through intuitive and efficient technology.Building a vibrant, interco nnected network of artists, businesses, and cultural enthusiasts.", icon: "fa-handshake" },
    { text: "Building a vibrant, interconnected network of artists, businesses, and cultural enthusiasts.", icon: "fa-network-wired" },
    { text: "Fair & Transparent Payments – Ensuring timely, secure, and equitable compensation for artists.", icon: "fa-money-bill-wave" },
    { text: "For the Creative Good – Championing art as a force for positive social, cultural, and economic impact.", icon: "fa-heart" },
    { text: "Ethical & Inclusive Ecosystem – Fostering a respectful, inclusive, and ethical environment for all stakeholders.", icon: "fa-balance-scale" },
    { text: "Technology for Creativity – Leveraging AI, blockchain, and digital tools to enhance opportunities and experiences.", icon: "fa-laptop-code" },
    { text: "Circular Economy in Art – Promoting sustainable practices by supporting upcycling, eco-friendly events, and responsible consumption.", icon: "fa-leaf" },
    { text: "Access to Education & Growth – Offering learning resources, mentorship, and upskilling opportunities for artists.", icon: "fa-graduation-cap" },
    { text: "Cultural Preservation & Innovation – Balancing the revival of traditional arts with the encouragement of new-age creativity.", icon: "fa-landmark" }
  ];
  return (
    <section id="labels" className={`page px-4 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
      <h3 className="text-2xl md:text-3xl font-bold color-text mb-4">Labels</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {labels.map((label, index) => {
          const [heading, content] = label.text.split(' – ');
          const defaultContent = content ? content : `${heading} `;
          return (
            <div key={index} className="bg-gray-800 p-4 rounded-md h-full flex flex-col justify-between">
              <div className="label-card">
                <div className="mb-4"><i className={`fas ${label.icon} label-icon color-text`}></i></div>
                <div className="mb-4"><h4 className="text-lg md:text-xl font-semibold color-text">{heading}</h4></div>
                <div><p className="text-white text-center">{defaultContent}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LabelsSection;