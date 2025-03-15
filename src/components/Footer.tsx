import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
            <FacebookIcon className="social-icon" />
          </a>
          <a href="https://www.instagram.com/clickads_agencia/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="social-icon" />
          </a>
        </div>
      </div>
      <div className="whatsapp-button">
        <WhatsAppIcon className="whatsapp-icon" />
      </div>
    </footer>
  );
}; 