import logoTransforma from "../assets/images/seguimiento-banner.png";
import "../assets/styles/Seguimiento.css";

function Seguimiento() {
  return (
    <div className="seguimiento-container">
      <main className="seguimiento-content">
        {/* Columna del formulario */}
        <div className="seguimiento-form-container">
          <h1 className="seguimiento-title">SEGUIMIENTO DE DENUNCIA</h1>
          <form className="seguimiento-form">
            <label htmlFor="folio">FOLIO*</label>
            <input
              type="text"
              id="folio"
              name="folio"
              placeholder="INGRESE EL FOLIO DE DENUNCIA"
              required
            />

            <div className="seguimiento-footer">
              <p className="seguimiento-note">*CAMPOS OBLIGATORIOS</p>
              <button type="submit" className="seguimiento-button">
                BUSCAR FOLIO
              </button>
            </div>
          </form>
        </div>

        {/* Columna de imágenes */}
        <div className="seguimiento-logos-container">
          <div className="seguimiento-logos">
            <img
              src={logoTransforma}
              alt="Humanismo que Transforma"
              className="logo-transforma"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Seguimiento;
