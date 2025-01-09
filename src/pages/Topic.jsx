import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import "../assets/styles/Topic.css";

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
  {
    id: 5,
    title: "MALVERSACIÓN",
    icon: "📂",
    description: "Uso indebido de fondos públicos para fines personales.",
  },
  {
    id: 6,
    title: "UN TITULO MUY LARGO QUE NOMAS SERVIRA DE EJEMPLO",
    icon: "👥",
    description: "Favoritismo hacia familiares o amigos en asignaciones laborales.",
  },
  {
    id: 7,
    title: "NO RENDIR CUENTAS",
    icon: "📊",
    description: "Falta de entrega de reportes financieros o administrativos.",
  },
  {
    id: 8,
    title: "FRAUDE",
    icon: "⚠️",
    description: "Manipulación o engaño para obtener beneficios ilegítimos.",
  },
  {
    id: 9,
    title: "CORRUPCIÓN",
    icon: "💰",
    description: "Uso indebido de poder para beneficio personal.",
  },
  {
    id: 10,
    title: "ABUSO DE PODER",
    icon: "🔒",
    description: "Uso excesivo de autoridad contra normas o ética.",
  },
  {
    id: 11,
    title: "MALVERSACIÓN",
    icon: "📂",
    description: "Uso indebido de fondos públicos para fines personales.",
  },
  {
    id: 12,
    title: "UN TITULO MUY LARGO QUE NOMAS SERVIRA DE EJEMPLO",
    icon: "👥",
    description: "Favoritismo hacia familiares o amigos en asignaciones laborales.",
  },
  {
    id: 7,
    title: "NO RENDIR CUENTAS",
    icon: "📊",
    description: "Falta de entrega de reportes financieros o administrativos.",
  },
  {
    id: 8,
    title: "FRAUDE",
    icon: "⚠️",
    description: "Manipulación o engaño para obtener beneficios ilegítimos.",
  },
  {
    id: 9,
    title: "CORRUPCIÓN",
    icon: "💰",
    description: "Uso indebido de poder para beneficio personal.",
  },
  {
    id: 10,
    title: "ABUSO DE PODER",
    icon: "🔒",
    description: "Uso excesivo de autoridad contra normas o ética.",
  },
  {
    id: 11,
    title: "MALVERSACIÓN",
    icon: "📂",
    description: "Uso indebido de fondos públicos para fines personales.",
  },
  {
    id: 12,
    title: "UN TITULO MUY LARGO QUE NOMAS SERVIRA DE EJEMPLO",
    icon: "👥",
    description: "Favoritismo hacia familiares o amigos en asignaciones laborales.",
  }
];

function Topic() {
  return (
    <div className="topic-page">
      <Header />
      <div className="topic-container">
        {/* Texto de introducción */}
        <h1 className="topic-title">NUEVA DENUNCIA</h1>
        <p className="topic-subtitle">
          Elige el tema que mejor represente el hecho o falta que deseas denunciar.
        </p>

        {/* Contenedor de las cards */}
        <div className="topic-grid-container">
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
    </div>
  );
}

export default Topic;
