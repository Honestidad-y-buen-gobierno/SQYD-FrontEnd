
import { useNavigate } from "react-router-dom"; // Importa el hook
import "../assets/styles/Denuncia.css";

function Denuncia() {
  const navigate = useNavigate(); // Inicializa el hook de navegación

  const handleRedirect = () => {
    navigate("/topic"); // Redirige a la página de Topic
  };

  return (
    <div className="denuncia-app-container">
      <main className="main-content">
        <section className="denuncia-section">
          <div className="denuncia-section-content">
            <h3 className="denuncia-title">
              Formulario para reportar conductas indebidas de funcionarios públicos
              o de particulares relacionados con actividades del gobierno.
            </h3>
            <p className="denuncia-description">
              Tu participación es clave para construir un gobierno más transparente y honesto.
            </p>
            <div className="denuncia-button-container">
              <button className="denuncia-button" onClick={handleRedirect}>
                Continuar
              </button>
            </div>
          </div>
        </section>

        <section className="info-section">
          {/* Cuadro verde: Qué sí denunciar aquí */}
          <div className="info-card">
            <h4 className="info-title">
              Qué <span className="highlight-yes">sí</span> denunciar aquí
            </h4>
            <ul>
              <li>Faltas administrativas de funcionarios públicos federales.</li>
              <li>
                Particulares (personas físicas o empresas) que:
                <ul>
                  <li>Manejen o utilicen recursos públicos federales.</li>
                  <li>Participen en contrataciones públicas de ámbito federal.</li>
                  <li>
                    Estén involucrados en transacciones comerciales
                    internacionales.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Cuadro rojo: Qué no denunciar aquí */}
          <div className="info-card">
            <h4 className="info-title">
              Qué <span className="highlight-no">no</span> denunciar aquí
            </h4>
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

export default Denuncia;
