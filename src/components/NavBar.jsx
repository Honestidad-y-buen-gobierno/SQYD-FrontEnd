import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/NavBar.css"; // Archivo de estilos específicos del NavBar

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active-link" end>
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/denuncia" className="nav-link" activeClassName="active-link">
            Denuncia
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/seguimiento" className="nav-link" activeClassName="active-link">
            Seguimiento de Denuncia
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
