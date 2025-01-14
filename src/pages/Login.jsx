import logoTransforma from "../assets/images/seguimiento-banner.png";
import "../assets/styles/Login.css";

function login() {
  return (
    <div className="login-container">
      <main className="login-content">
        {/* Columna del formulario */}
        <div className="login-form-container">
          <form className="login-form">
            <label htmlFor="folio">Correo electronico*</label>
            <input
              type="text"
              id="correo"
              name="correo"
              placeholder="INGRESE SU CORREO ELECTRONICO"
              required
            />
             <label htmlFor="folio">Contraseña*</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="INGRESE SU CONTRASEÑA "
              required
            />
            <div className="login-footer">
              <p className="login-note">*CAMPOS OBLIGATORIOS</p>
              <button type="submit" className="login-button">
                Iniciar Sesion
              </button>
            </div>
          </form>
        </div>

        {/* Columna de imágenes */}
        <div className="login-logos-container">
          <div className="login-logos">
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

export default login;
