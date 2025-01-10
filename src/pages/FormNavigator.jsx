import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import Form from "../components/Form"; // Importamos el formulario
import "../assets/styles/Descripcion.css";

const FormNavigator = () => {
  const steps = ["HECHOS", "DESCRIPCIÓN", "CONTACTO"];
  const [currentStep, setCurrentStep] = useState(1); // Controlamos el paso actual
  const [completedSteps, setCompletedSteps] = useState([]); // Pasos completados

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

  const handleFormSubmit = (formData) => {
    console.log("Formulario enviado con datos:", formData);
    // Aquí puedes manejar el envío del formulario
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
        handleNext={handleNext} // Mover al siguiente paso
        handleBack={handleBack} // Mover al paso anterior
        onSubmit={handleFormSubmit} // Manejo del envío
      />
    </div>
  );
};

export default FormNavigator;
