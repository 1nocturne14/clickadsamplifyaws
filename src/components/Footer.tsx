import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contacto">
      <div className="footer-content">
        <p className="copyright">
          © 2021 - {currentYear} ClickAds Marketing - Todos los derechos reservados
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com/clickadsagencia" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/clickads_agencia/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="whatsapp-button">
        <FaWhatsapp />
      </div>
    </footer>
  );
}; 