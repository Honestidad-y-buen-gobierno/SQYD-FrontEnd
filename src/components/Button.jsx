import React from "react";
import "../assets/styles/Button.css"; // Archivo de estilos específicos del botón

function Button({ text, onClick, type = "button", className = "" }) {
  return (
    <button className={`button ${className}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
}

export default Button;
