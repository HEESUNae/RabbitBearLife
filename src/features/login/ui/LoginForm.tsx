'use client';

import styled from '@emotion/styled';
import { Button, Input } from '@/shared/components';
import { useLoginForm } from '../model/useLoginForm';

export const LoginForm = () => {
  const { formSubmit, form } = useLoginForm();

  return (
    <StyledLoginForm onSubmit={form.handleSubmit(formSubmit)}>
      <Input type="password" placeholder="비밀번호 입력" {...form.register('pw', { required: true })} />
      <Button type="submit" className="fill">
        로그인
      </Button>
    </StyledLoginForm>
  );
};

const StyledLoginForm = styled.form`
  display: grid;
  gap: 2.4rem;
  width: 100%;
`;
