import React from 'react';

export const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">ClickAds</div>
      <div className="nav-links">
        <a href="#servicios" onClick={(e) => {
          e.preventDefault();
          scrollToSection('servicios');
        }}>Servicios</a>
        <a href="#precios" onClick={(e) => {
          e.preventDefault();
          scrollToSection('precios');
        }}>Precios</a>
        <a href="#contacto" onClick={(e) => {
          e.preventDefault();
          scrollToSection('contacto');
        }}>Contacto</a>
      </div>
    </nav>
  );
}; 