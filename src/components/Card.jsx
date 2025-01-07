import React from "react";
import "../assets/styles/Card.css"; // Archivo de estilos específicos de la tarjeta

function Card({ title, content, className = "" }) {
  return (
    <div className={`card ${className}`}>
      <h4 className="card-title">{title}</h4>
      <div className="card-content">{content}</div>
    </div>
  );
}

export default Card;