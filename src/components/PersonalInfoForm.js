import React from 'react';
import { useFormData } from '../context/FormContext';

const PersonalInfoForm = () => {
  const { formData, updateFormData } = useFormData();

  return (
    <form>
      <input placeholder="Name" value={formData.name} onChange={(e) => updateFormData({ name: e.target.value })} />
      <input placeholder="Email" value={formData.email} onChange={(e) => updateFormData({ email: e.target.value })} />
      <input placeholder="Phone" value={formData.phone} onChange={(e) => updateFormData({ phone: e.target.value })} />
      <input placeholder="Address" value={formData.address} onChange={(e) => updateFormData({ address: e.target.value })} />
    </form>
  );
};

export default PersonalInfoForm;
