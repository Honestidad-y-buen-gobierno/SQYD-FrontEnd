import React, { useState } from "react";
import "../assets/styles/Card.css";

function Card({ title, icon, description }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  const handleTouchStart = () => {
    setShowDescription(true);
  };

  const handleTouchEnd = () => {
    setShowDescription(false);
  };

  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Contenido principal */}
      <div className={`card-content ${showDescription ? "card-blur" : ""}`}>
        <div className="card-icon">{icon}</div>
        <div className="card-title">{title}</div>
      </div>
      {/* Descripción visible en hover/presión */}
      {showDescription && (
        <div className="card-description">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
