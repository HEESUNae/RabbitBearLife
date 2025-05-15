'use client';

import styled from '@emotion/styled';

interface InputProps {
  type?: 'text' | 'password';
  placeholder?: string;
}

export const Input = ({ type = 'text', ...rest }: InputProps) => {
  return <StyledInput type={type} {...rest} />;
};

const StyledInput = styled.input`
  height: 4.8rem;
  padding: 1.2rem;
  box-sizing: border-box;
  border: 0.1rem solid var(--gray-border);
  border-radius: 0.6rem;
  width: 100%;
`;
