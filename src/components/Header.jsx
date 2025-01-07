import React from "react";
import "../assets/styles/Header.css"; // Archivo de estilos específicos del Header

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src="/logo.png" // Ruta del logo en la carpeta public
          alt="Logo de la Secretaría Anticorrupción y Buen Gobierno"
          className="header-logo"
        />
        <div className="header-text">
          <h1 className="header-title">Secretaría Anticorrupción y Buen Gobierno</h1>
          <h2 className="header-subtitle">Gobierno de Chiapas 2024 - 2030</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;