'use client';

import styled from '@emotion/styled';

interface ButtonProps {
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ type = 'button', className, onClick, children }: ButtonProps) => {
  return (
    <StyledButton type={type} className={className} onClick={onClick}>
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
  }
  &.text {
    color: var(--gray-text);
  }
`;
