import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Importar para navegación
import ProgressBar from "../components/ProgressBar";
import Form from "../components/Form"; // Formulario
import "../assets/styles/Descripcion.css"; // Estilos específicos del componente

const FormNavigator = () => {
  const steps = ["HECHOS", "DESCRIPCIÓN", "CONTACTO"];
  const [currentStep, setCurrentStep] = useState(1); // Paso actual
  const [completedSteps, setCompletedSteps] = useState([]); // Pasos completados
  const [formData, setFormData] = useState({}); // Datos del formulario
  const navigate = useNavigate(); // Hook para navegación
  const location = useLocation();
  const { temaSeleccionado } = location.state || {};

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCompletedSteps((prev) => {
        const updated = [...prev];
        if (!updated.includes(currentStep)) {
          updated.push(currentStep);
        }
        return updated;
      });
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCompletedSteps((prev) => {
        const updated = [...prev];
        return updated.filter((step) => step !== currentStep - 1);
      });
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFormSubmit = (data) => {
    navigate("/summary", { state: { formData: { ...data, temaSeleccionado } } });
  };
  

  return (
    <div className="form-navigator">
      {/* Barra de progreso */}
      <ProgressBar
        steps={steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        completedSteps={completedSteps}
      />

      {/* Formulario */}
      <Form
        currentStep={currentStep} // Paso actual
        handleNext={handleNext} // Manejo para avanzar al siguiente paso
        handleBack={handleBack} // Manejo para retroceder al paso anterior
        onSubmit={handleFormSubmit} // Manejo para enviar el formulario
      />
    </div>
  );
};

export default FormNavigator;
