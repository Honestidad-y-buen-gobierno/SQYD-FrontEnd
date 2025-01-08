
import logo from "../assets/images/logo.png";
import "../assets/styles/Header.css";

function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="logo-text">
        
      </div>
    </div>
  );
}

export default Logo;
