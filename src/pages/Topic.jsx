import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import delitosData from "../assets/json/ofensas.json";
import "../assets/styles/Topic.css";

function Topic() {
  const navigate = useNavigate();

  const handleCardClick = (delito) => {
    navigate("/descripcion", { state: { temaSeleccionado: delito.title } });
  };

  return (
    <div className="topic-page">
      <Header />
      <div className="topic-container">
        <h1 className="topic-title">NUEVA DENUNCIA</h1>
        <p className="topic-subtitle">
          Elige el tema que mejor represente el hecho o falta que deseas denunciar.
        </p>

        <div className="topic-grid-container">
          <div className="topic-grid">
            {delitosData.Delitos.map((delito, index) => (
              <Card
                key={index}
                title={delito.title}
                icon={delito.emoji}
                description={delito.description}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topic;
