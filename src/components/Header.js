import React from 'react';

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header w-full p-4 flex justify-between items-center fixed top-0 z-10">
      <img src="logo.png" alt="Logo" className="logo" />
    </header>
  );
};

export default Header;