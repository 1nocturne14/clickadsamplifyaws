import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';

export const Features: React.FC = () => {
  return (
    <section className="features" id="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="features-grid">
        <div className="feature-item">
          <div className="icon-wrapper">
            <FacebookIcon className="feature-icon" />
          </div>
          <h3>Publicidad paga en Meta</h3>
          <p>Maximiza tu presencia en redes sociales con campañas publicitarias estratégicas y efectivas que generan resultados medibles.</p>
        </div>
        <div className="feature-item">
          <div className="icon-wrapper">
            <BrushIcon className="feature-icon" />
          </div>
          <h3>Creación de contenido</h3>
          <p>Desarrollamos contenido creativo y estratégico que conecta con tu audiencia y fortalece tu marca en el mundo digital.</p>
        </div>
        <div className="feature-item">
          <div className="icon-wrapper">
            <CodeIcon className="feature-icon" />
          </div>
          <h3>Creación de páginas webs</h3>
          <p>Diseñamos y desarrollamos sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.</p>
        </div>
      </div>
    </section>
  );
}; 