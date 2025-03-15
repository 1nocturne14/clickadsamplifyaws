import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import CampaignIcon from '@mui/icons-material/Campaign';
import LanguageIcon from '@mui/icons-material/Language';

export const Pricing: React.FC = () => {
  return (
    <section className="pricing" id="planes">
      <h2>Nuestros Planes</h2>
      <div className="pricing-grid">
        <div className="pricing-item">
          <div className="pricing-icon">
            <InstagramIcon />
          </div>
          <h3>Manejo de redes</h3>
          <div className="price-tag">
            desde $200.000 COP <span className="price-period">mensuales</span>
          </div>
          <ul className="features-list">
            <li>12 publicaciones al mes en el feed e historias</li>
            <li>2 historias destacadas en Instagram</li>
            <li>Parrilla de contenido</li>
            <li>Mejoramos tu linea grafica y el entendimiento de tu marca</li>
          </ul>
          <button className="button-primary">
            <WhatsAppIcon className="button-icon" /> Contratar
          </button>
        </div>
        <div className="pricing-item">
          <div className="pricing-icon">
            <CampaignIcon />
          </div>
          <h3>Publicidad paga</h3>
          <div className="price-tag">
            desde $250.000 COP <span className="price-period">mensuales</span>
          </div>
          <ul className="features-list">
            <li>Creación y configuración de maximo 5 campañas al mes</li>
            <li>Optimización de campañas</li>
            <li>Creación de piezas publicitarias (maximo 15 anuncios)</li>
            <li>Creación de cuenta publicitaria en Meta</li>
            <li>El pago no incluye la inversión en Meta Ads</li>
          </ul>
          <button className="button-primary">
            <WhatsAppIcon className="button-icon" /> Contratar
          </button>
        </div>
        <div className="pricing-item">
          <div className="pricing-icon">
            <LanguageIcon />
          </div>
          <h3>Páginas web</h3>
          <div className="price-tag">
            desde $700.000 COP <span className="price-period">pago único</span>
          </div>
          <ul className="features-list">
            <li>¡Página web informativa con 4 secciones!</li>
            <li>Hosting y dominio GRATIS el primer año</li>
            <li>Soporte técnico por 3 meses</li>
            <li>Vinculación a redes sociales y WhatsApp</li>
            <li>Adaptable a celulares y computadoras</li>
            <li>Velocidad de carga rápida</li>
            <li>Posicionamiento básico en Google (SEO)</li>
          </ul>
          <button className="button-primary">
            <WhatsAppIcon className="button-icon" /> Contratar
          </button>
        </div>
      </div>
    </section>
  );
}; 