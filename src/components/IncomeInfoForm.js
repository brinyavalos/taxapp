import React from 'react';
import { useFormData } from '../context/FormContext';

const IncomeInfoForm = () => {
  const { formData, updateFormData } = useFormData();

  return (
    <form>
      <input placeholder="Personal Income" value={formData.personalIncome} onChange={(e) => updateFormData({ personalIncome: e.target.value })} />
      <input placeholder="S-Corp Income" value={formData.sCorpIncome} onChange={(e) => updateFormData({ sCorpIncome: e.target.value })} />
    </form>
  );
};

export default IncomeInfoForm;
