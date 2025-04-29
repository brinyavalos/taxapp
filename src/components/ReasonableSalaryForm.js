import React from 'react';
import { useFormData } from '../context/FormContext';

const ReasonableSalaryForm = () => {
  const { formData, updateFormData } = useFormData();

  return (
    <>
      <form>
        <input placeholder="Reasonable Salary" value={formData.reasonableSalary} onChange={(e) => updateFormData({ reasonableSalary: e.target.value })} />
      </form>
      <p>
        A "reasonable salary" is the fair market wage you would pay someone else to do your job. S-Corp owners must pay themselves a reasonable salary before taking distributions to comply with IRS rules.
      </p>
    </>
  );
};

export default ReasonableSalaryForm;
