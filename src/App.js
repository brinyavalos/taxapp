import React, { useState } from 'react';
import PersonalInfoForm from './components/PersonalInfoForm';
import IncomeInfoForm from './components/IncomeInfoForm';
import ExpensesForm from './components/ExpensesForm';
import ReasonableSalaryForm from './components/ReasonableSalaryForm';
import ProgressBar from './components/ProgressBar';
import Success from './components/Success';
import { useFormData } from './context/FormContext';
import './App.css';


const App = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const { formData } = useFormData();

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: "25494238-b04d-4bfb-98f5-f11180631c58", // <-- Replace this
        ...formData
      })
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert('Submission failed');
    }
  };

  if (submitted) return <Success />;

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h1>S-Corp Tax Wizard</h1>
      <ProgressBar currentStep={step} />
      {step === 0 && <PersonalInfoForm />}
      {step === 1 && <IncomeInfoForm />}
      {step === 2 && <ExpensesForm />}
      {step === 3 && <ReasonableSalaryForm />}

      <div style={{ marginTop: "20px" }}>
        {step > 0 && <button onClick={handlePrev}>Previous</button>}
        {step < 3 && <button onClick={handleNext}>Next</button>}
        {step === 3 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default App;
