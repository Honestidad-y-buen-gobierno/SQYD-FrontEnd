import React from "react";
import Header from "./Header";
import Card from "./Card";
import "../assets/styles/Topic.css"; // Actualiza la referencia al nuevo archivo CSS

const options = [
  {
    id: 1,
    title: "NO RENDIR CUENTAS",
    icon: "📊",
    description: "Falta de entrega de reportes financieros o administrativos.",
  },
  {
    id: 2,
    title: "FRAUDE",
    icon: "⚠️",
    description: "Manipulación o engaño para obtener beneficios ilegítimos.",
  },
  {
    id: 3,
    title: "CORRUPCIÓN",
    icon: "💰",
    description: "Uso indebido de poder para beneficio personal.",
  },
  {
    id: 4,
    title: "ABUSO DE PODER",
    icon: "🔒",
    description: "Uso excesivo de autoridad contra normas o ética.",
  },
];

function Topic() {
  return (
    <div>
      <Header />
      <div className="topic-container">
        <h1 className="topic-title">NUEVA DENUNCIA</h1>
        <p className="topic-subtitle">
          ELIGE EL TEMA QUE MEJOR REPRESENTE EL HECHO O FALTA QUE DESEAS DENUNCIAR.
        </p>
        <div className="topic-grid">
          {options.map((option) => (
            <Card
              key={option.id}
              title={option.title}
              icon={option.icon}
              description={option.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Topic;
