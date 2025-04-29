import React from 'react';

const ProgressBar = ({ currentStep }) => {
  const steps = ["Personal Info", "Income Info", "Expenses", "Reasonable Salary"];

  return (
    <div className="progress">
      {steps.map((step, index) => (
        <div key={index} className={currentStep === index ? 'active' : ''}>
          {step}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
