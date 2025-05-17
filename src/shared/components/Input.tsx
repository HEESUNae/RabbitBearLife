'use client';

import styled from '@emotion/styled';

interface InputProps {
  type?: 'text' | 'password';
  placeholder?: string;
  label?: string;
  required?: boolean;
}

export const Input = ({ type = 'text', label, required, ...rest }: InputProps) => {
  return (
    <StyledInput>
      {label && (
        <label>
          {label}
          {required && <span>*</span>}
        </label>
      )}
      <input type={type} {...rest} />
    </StyledInput>
  );
};

const StyledInput = styled.div`
  input {
    height: 4.8rem;
    padding: 1.2rem;
    box-sizing: border-box;
    border: 0.1rem solid var(--gray-border);
    border-radius: 0.6rem;
    width: 100%;
    font-size: 1.6rem;
  }
  label {
    font-size: 1.6rem;
    margin-bottom: 0.4rem;
    display: block;
    span {
      color: var(--main);
      vertical-align: top;
    }
  }
`;
