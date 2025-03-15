import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section className="pricing" id="precios">
      <h2>Nuestros Planes</h2>
      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Manejo de redes sociales</h3>
          <div className="price">desde $200.000 COP</div>
          <ul className="features-list">
            <li>12 publicaciones al mes en el feed e historias</li>
            <li>2 historias destacadas en Instagram</li>
            <li>Parrilla de contenido</li>
            <li>Mejoramos tu linea grafica y el entendimiento de tu marca</li>
          </ul>
          <button className="button-primary">Contratar</button>
        </div>
        <div className="pricing-card featured">
          <h3>Publicidad paga</h3>
          <div className="price">desde $250.000 COP</div>
          <ul className="features-list">
            <li>Creación y configuración de maximo 5 campañas al mes</li>
            <li>Optimización de campañas</li>
            <li>Creación de piezas publicitarias (maximo 15 anuncios)</li>
            <li>Creación de cuenta publicitaria en Meta</li>
            <li>El pago no incluye la inversión en Meta Ads</li>
          </ul>
          <button className="button-primary">Contratar</button>
        </div>
        <div className="pricing-card">
          <h3>Páginas web</h3>
          <div className="price">desde $700.000 COP</div>
          <ul className="features-list">
            <li>¡Página web informativa con 4 secciones!</li>
            <li>Hosting y dominio GRATIS el primer año</li>
            <li>Soporte técnico por 3 meses</li>
            <li>Vinculación a redes sociales y WhatsApp</li>
            <li>Adaptable a celulares y computadoras</li>
            <li>Velocidad de carga rápida</li>
            <li>Posicionamiento básico en Google (SEO)</li>
          </ul>
          <button className="button-primary">Contratar</button>
        </div>
      </div>
    </section>
  );
}; 