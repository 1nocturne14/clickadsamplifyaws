import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1>
        Más Clientes, Más Ventas,<br />
        <span className="highlight">Más Crecimiento</span>
      </h1>
      <p>Creamos contenido que conecta, campañas que convierten y páginas web que impactan. Si buscas que tu negocio crezca en digital sin desperdiciar presupuesto, estás en el lugar correcto.</p>
      <button className="button-primary">
        <WhatsAppIcon className="button-icon" /> Contáctanos por WhatsApp
      </button>
      <div className="trusted-brands">
        <div className="brand-logos">
          <div className="meta-expert">
            <FacebookIcon className="meta-icon" />
            <span>Expertos en Meta</span>
          </div>
        </div>
      </div>
    </section>
  );
}; 