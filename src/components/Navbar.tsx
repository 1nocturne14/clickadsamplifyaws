import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">Kranix</div>
      <div className="nav-links">
        <a href="#process">Process</a>
        <a href="#security">Security</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#faq">FAQ</a>
        <button className="button-primary">Get Started</button>
      </div>
    </nav>
  );
}; 