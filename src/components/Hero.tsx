import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { SiMeta } from 'react-icons/si';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1>
        Más Clientes, Más Ventas,<br />
        <span className="highlight">Más Crecimiento</span>
      </h1>
      <p>Creamos contenido que conecta, campañas que convierten y páginas web que impactan. Si buscas que tu negocio crezca en digital sin desperdiciar presupuesto, estás en el lugar correcto.</p>
      <button className="button-primary">
        <FaWhatsapp className="icon" /> Contáctanos por WhatsApp
      </button>
      <div className="trusted-brands">
        <div className="brand-logos">
          <div className="meta-expert">
            <SiMeta className="meta-icon" />
            <span>Expertos en Meta</span>
          </div>
        </div>
      </div>
    </section>
  );
}; 