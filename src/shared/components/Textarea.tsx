'use client';

import { useState } from 'react';
import styled from '@emotion/styled';

interface TextareaProps {
  label?: string;
}

export const Textarea = ({ label, ...rest }: TextareaProps) => {
  const [textLength, setTextLength] = useState<number>(0);
  const maxLength = 70;

  // 입력된 텍스트 글자수 표시
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setTextLength(value.length);
  };

  return (
    <StyledTextarea>
      <div className="label">
        {label && <label>{label}</label>}
        <p>
          {textLength} / {maxLength}
        </p>
      </div>
      <textarea rows={5} {...rest} onChange={handleChange} maxLength={maxLength} />
    </StyledTextarea>
  );
};

const StyledTextarea = styled.div`
  textarea {
    padding: 1rem;
    border: 0.1rem solid var(--gray-border);
    border-radius: 0.6rem;
    width: 100%;
    box-sizing: border-box;
    resize: none;
    font-size: 1.6rem;
  }
  .label {
    display: flex;
    justify-content: space-between;
    label {
      font-size: 1.6rem;
      margin-bottom: 0.4rem;
      display: block;
    }
    p {
      font-size: 1.2rem;
      color: var(--gray-text);
    }
  }
`;
