import React from 'react';
import { useFormData } from '../context/FormContext';

const ExpensesForm = () => {
  const { formData, updateFormData } = useFormData();

  return (
    <form>
      <input placeholder="General Expenses" value={formData.generalExpenses} onChange={(e) => updateFormData({ generalExpenses: e.target.value })} />
      <input placeholder="Owner Withdrawals" value={formData.ownerWithdrawals} onChange={(e) => updateFormData({ ownerWithdrawals: e.target.value })} />
      <input placeholder="Extra Distributions" value={formData.extraDistributions} onChange={(e) => updateFormData({ extraDistributions: e.target.value })} />
    </form>
  );
};

export default ExpensesForm;
