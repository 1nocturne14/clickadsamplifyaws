import React from 'react';
import { SiMeta } from 'react-icons/si';
import { FaPaintBrush, FaCode } from 'react-icons/fa';

export const Features: React.FC = () => {
  return (
    <section className="features" id="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">
            <SiMeta />
          </div>
          <h3>Publicidad paga en Meta</h3>
          <p>Maximiza tu presencia en redes sociales con campañas publicitarias estratégicas y efectivas que generan resultados medibles.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <FaPaintBrush />
          </div>
          <h3>Creación de contenido</h3>
          <p>Desarrollamos contenido creativo y estratégico que conecta con tu audiencia y fortalece tu marca en el mundo digital.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <FaCode />
          </div>
          <h3>Creación de páginas webs</h3>
          <p>Diseñamos y desarrollamos sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.</p>
        </div>
      </div>
    </section>
  );
}; 