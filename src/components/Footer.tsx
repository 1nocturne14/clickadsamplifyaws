import React from 'react';
import { IconContext } from 'react-icons';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contacto">
      <div className="footer-content">
        <p className="copyright">
          © 2021 - {currentYear} ClickAds Marketing - Todos los derechos reservados
        </p>
        <IconContext.Provider value={{ className: 'social-icon' }}>
          <div className="social-icons">
            <a href="https://www.facebook.com/clickadsagencia" target="_blank" rel="noopener noreferrer">
              <FaFacebook aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/clickads_agencia/" target="_blank" rel="noopener noreferrer">
              <FaInstagram aria-hidden="true" />
            </a>
          </div>
        </IconContext.Provider>
      </div>
      <IconContext.Provider value={{ className: 'whatsapp-icon' }}>
        <div className="whatsapp-button">
          <FaWhatsapp aria-hidden="true" />
        </div>
      </IconContext.Provider>
    </footer>
  );
}; 