import React from "react";
import Form from "../components/Form"; // Importa el componente Form

function ViewForm() {
  const handleSubmit = (formData) => {
    console.log("Datos enviados del formulario:", formData);
  };

  return (
    <div className="view-form">
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default ViewForm;
