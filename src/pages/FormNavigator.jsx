import  { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import "../assets/styles/Descripcion.css";

const FormNavigator = () => {
  const steps = ["HECHOS", "DESCRIPCIÓN", "CONTACTO"];
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);

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

  return (
    <div className="form-navigator">
      <ProgressBar
        steps={steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        completedSteps={completedSteps}
      />
      <div className="form-content">
        <h3>Contenido de: {steps[currentStep - 1]}</h3>
        <div className="form-buttons">
          <button onClick={handleBack} disabled={currentStep === 1}>
            Atrás
          </button>
          <button onClick={handleNext} disabled={currentStep === steps.length}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormNavigator;
