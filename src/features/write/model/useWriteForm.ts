import { FieldValues, useForm } from 'react-hook-form';

export const useWriteForm = () => {
  const form = useForm();

  const formSubmit = (formData: FieldValues) => {
    console.log(formData);
  };

  return {
    form,
    formSubmit,
  };
};
