import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/ProgressBar.css";

const ProgressBar = ({ steps, currentStep, setCurrentStep, completedSteps }) => {
  return (
    <div className="progress-bar-container">
      <h2 className="progress-title">DATOS DE LOS HECHOS</h2>
      <div className="progress-steps">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className={`step ${
                currentStep === index + 1
                  ? "active"
                  : completedSteps.includes(index + 1)
                  ? "completed"
                  : ""
              }`}
            >
              <div
                className="step-circle"
                onClick={() => setCurrentStep(index + 1)}
              >
                {completedSteps.includes(index + 1) ? "✔" : index + 1}
              </div>
              <div className="step-label">{step}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  completedSteps: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default ProgressBar;
