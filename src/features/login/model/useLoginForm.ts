import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';

export const useLoginForm = () => {
  const router = useRouter();
  const form = useForm();

  const formSubmit = async (formData: FieldValues) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push('/main');
    } else {
      alert('비밀번호가 틀립니다');
    }
  };

  return {
    formSubmit,
    form,
  };
};
