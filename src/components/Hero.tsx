import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>
          Más Clientes, Más Ventas,<br />
          <span className="highlight">Más Crecimiento</span>
        </h1>
        <p>Creamos contenido que conecta, campañas que convierten y páginas web que impactan. Si buscas que tu negocio crezca en digital sin desperdiciar presupuesto, estás en el lugar correcto.</p>
        <button className="button-primary">
          <WhatsAppIcon className="button-icon" /> Contáctanos por WhatsApp
        </button>
        <div className="meta-expert">
          <FacebookIcon className="meta-icon" />
          <InstagramIcon className="meta-icon" />
          <span>Expertos en Marketing Digital</span>
        </div>
      </div>
    </section>
  );
}; 