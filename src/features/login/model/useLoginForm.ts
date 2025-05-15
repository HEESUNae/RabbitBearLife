import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';

export const useLoginForm = () => {
  const router = useRouter();
  const form = useForm();

  const formSubmit = (formData: FieldValues) => {
    console.log(formData);
    if (formData.pw === '123123123') {
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
