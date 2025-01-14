
import "../assets/styles/Header.css";
import logo from "../assets/images/logo.png";
import background from "../assets/images/pattern.png";

function Header() {
  return (
    <header className="header">
      <div
        className="header-background"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header-navbar">
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/denuncia">Denuncia</a></li>
            <li><a href="/seguimiento">Seguimiento de Denuncia</a></li>
            <li><a href="/login">Iniciar Sesion</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
 