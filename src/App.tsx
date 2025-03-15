import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ClickAds Marketing</h1>
        <p>Tu Socio en Marketing Digital</p>
      </header>
      <main>
        <section className="services">
          <h2>Servicios de Marketing Digital</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Facebook & Instagram Ads</h3>
              <p>Alcanza a tu audiencia ideal en redes sociales</p>
            </div>
            <div className="service-card">
              <h3>Google Ads</h3>
              <p>Aparece cuando tus clientes te buscan</p>
            </div>
            <div className="service-card">
              <h3>SEO</h3>
              <p>Mejora tu posicionamiento orgánico</p>
            </div>
          </div>
        </section>
        <section className="cta">
          <h2>¿Listo para crecer?</h2>
          <p>Impulsa tu negocio con estrategias digitales efectivas</p>
        </section>
      </main>
      <footer>
        <p>© 2024 ClickAds Marketing - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
