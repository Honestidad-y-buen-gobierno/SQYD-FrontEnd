import React from "react";
import  "../assets/styles/app.css"; // Asegúrate de tener un archivo CSS para los estilos

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <img
          src="/logo.png" // Cambia la ruta por tu logo
          alt="Secretaría Anticorrupción y Buen Gobierno"
          className="header-logo"
        />
        <h1 className="header-title">
          Secretaría Anticorrupción y Buen Gobierno
        </h1>
        <h2 className="header-subtitle">Gobierno de Chiapas 2024 - 2030</h2>
      </header>

      <nav className="nav-bar">
        <button className="nav-button">Inicio</button>
        <button className="nav-button">Denuncia</button>
        <button className="nav-button">Seguimiento de Denuncia</button>
      </nav>

      <main className="main-content">
        <section className="denuncia-section">
          <h3 className="denuncia-title">
            Formulario para reportar conductas indebidas de funcionarios públicos
            o de particulares relacionados con actividades del gobierno.
          </h3>
          <p className="denuncia-description">
            Tu participación es clave para construir un gobierno más
            transparente y honesto.
          </p>
          <button className="denuncia-button">Iniciar Denuncia</button>
        </section>

        <section className="info-section">
          <div className="info-card">
            <h4 className="info-title">Qué <span className="highlight">sí</span> denunciar aquí</h4>
            <ul>
              <li>Faltas administrativas de funcionarios públicos federales.</li>
              <li>
                Particulares (personas físicas o empresas) que:
                <ul>
                  <li>Manejen o utilicen recursos públicos federales.</li>
                  <li>Participen en contrataciones públicas de ámbito federal.</li>
                  <li>
                    Estén involucrados en transacciones comerciales internacionales.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="info-card">
            <h4 className="info-title">Qué <span className="highlight">no</span> denunciar aquí</h4>
            <ul>
              <li>Trámites y/o servicios.</li>
              <li>Asuntos laborales.</li>
              <li>Conflictos entre particulares.</li>
              <li>Poder Judicial.</li>
              <li>Poder Legislativo.</li>
              <li>Autoridades Estatales o Municipales.</li>
              <li>Organismos Autónomos.</li>
              <li>Protección de Datos Personales.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
