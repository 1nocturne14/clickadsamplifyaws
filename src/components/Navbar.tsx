import React, { useState, useEffect } from 'react';
import logo from '../assets/images/LOGOSVG.svg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          <button 
            className="menu-button" 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <MenuIcon />
          </button>
          <div className="logo" onClick={() => scrollToSection('hero')} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="ClickAds Marketing Logo" />
          </div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {isMenuOpen && (
              <button 
                className="close-menu-button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <CloseIcon />
              </button>
            )}
            <a href="#hero" onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}>Inicio</a>
            <a href="#servicios" onClick={(e) => {
              e.preventDefault();
              scrollToSection('servicios');
            }}>Servicios</a>
            <a href="#planes" onClick={(e) => {
              e.preventDefault();
              scrollToSection('planes');
            }}>Planes</a>
            <a href="#faq" onClick={(e) => {
              e.preventDefault();
              scrollToSection('faq');
            }}>FAQ</a>
          </div>
        </div>
      </nav>
      <a 
        href="https://wa.me/573053964080" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}; 