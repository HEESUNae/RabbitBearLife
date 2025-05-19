'use client';

import styled from '@emotion/styled';

interface ButtonProps {
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({ type = 'button', className, disabled, onClick, children }: ButtonProps) => {
  return (
    <StyledButton type={type} className={className} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 1.6rem;
  border: 0;
  background-color: transparent;
  &.fill {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.6rem;
    color: #fff;
    font-weight: 600;
    background-color: var(--main);
    width: 100%;
    &:disabled {
      background-color: var(--gray-back);
      color: var(--gray-text);
    }
  }
  &.text {
    color: var(--gray-text);
  }
`;
