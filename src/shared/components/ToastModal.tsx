'use client';

import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

export const ToastModal = () => {
  const [visible, setVisible] = useState(true);

  //todo: 글쓰면 모달 3초뒤 사라지게 (zustand)
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return;

  return (
    <StyledToastModal>
      <div className="modal">sd</div>
    </StyledToastModal>
  );
};

const StyledToastModal = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  padding: 2rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: 100%;
  .modal {
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 2rem;
    padding: 1rem;
  }
`;
