import React from "react";
import { useLocation } from "react-router-dom";
import "../assets/styles/Summary.css";

const Summary = () => {
  const location = useLocation();
  const { formData } = location.state || {};
  const { temaSeleccionado } = formData || {};

  // Detalles generales del contacto
  const contactDetails = [
    { label: "Dependencia", value: formData?.dependencia },
    { label: "Área de Adscripción", value: formData?.adscripcion },
    { label: "CURP", value: formData?.curp },
    { label: "Nombre", value: `${formData?.nombre} ${formData?.primerApellido} ${formData?.segundoApellido}`.trim() },
    { label: "Sexo", value: formData?.sexo },
    { label: "Edad", value: formData?.edad },
    { label: "Escolaridad", value: formData?.escolaridad },
    { label: "Ocupación", value: formData?.ocupacion },
    { label: "Teléfono", value: formData?.telefono },
    { label: "Correo Electrónico", value: formData?.email },
  ].filter((detail) => detail.value && detail.value.trim() !== "");

  // Función para copiar el folio al portapapeles
  const copyToClipboard = () => {
    const folio = "15JAN25AYB9";
    navigator.clipboard.writeText(folio);
    alert("Folio copiado al portapapeles");
  };

  return (
    <div className="summary-container">
      <h1>REPORTE DE INFORMACION</h1>

      <div className="summary-section">
        <h2>Folio de Seguimiento</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <p style={{ margin: 0 }}><strong>Folio:</strong> 15JAN25AYB9</p>
          <button className="copy-button" onClick={copyToClipboard}>
            Copiar
          </button>
        </div>
        <p className="folio-legend">
          Guarde este folio para futuras consultas*
        </p>
      </div>
      <div className="summary-section">
        <h2>Tema</h2>
        <p><strong>Tema Seleccionado:</strong> {temaSeleccionado || "No seleccionado"}</p>
      </div>
      <div className="summary-section">
        <h2>Hechos</h2>
        <p><strong>Fecha:</strong> {formData?.fecha}</p>
        <p><strong>Dependencia:</strong> {formData?.dependenciaHechos}</p>
        <p><strong>Municipio:</strong> {formData?.municipio}</p>
      </div>
      <div className="summary-section">
        <h2>Descripción</h2>
        <p>{formData?.descripcion}</p>
      </div>
      <div className="summary-section">
        <h2>Contacto</h2>
        {!formData?.isAnonimo && (
          <p>
            <strong>Tipo de Denunciante:</strong>{" "}
            {formData?.denunciante === "servidor_publico" ? "Servidor Público" : "Particular"}
          </p>
        )}

        {contactDetails.length > 0 ? (
          contactDetails.map((detail, index) => (
            <p key={index}>
              <strong>{detail.label}:</strong> {detail.value}
            </p>
          ))
        ) : (
          <p>No se proporcionaron datos de contacto adicionales.</p>
        )}
      </div>
      <div className="denuncia-button-container">
        <button className="denuncia-button">
          FINALIZAR
        </button>
      </div>
    </div>
  );
};

export default Summary;
