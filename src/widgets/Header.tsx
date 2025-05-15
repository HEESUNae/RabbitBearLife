'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styled from '@emotion/styled';
import { Button } from '@/shared/components';

export const Header = () => {
  const router = useRouter();
  const path = usePathname();

  // 디데이 계산
  const calcDday = useMemo(() => {
    const startDate = new Date('2020-07-25');
    const nowDate = new Date();
    const diff = nowDate.getTime() - startDate.getTime();
    const formetDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    return formetDay;
  }, []);

  return (
    <StyledHeader>
      {path === '/main' && (
        <div className="main-header">
          <div className="d-day">
            <Image src="/icons/heart.svg" alt="" width={24} height={24} />
            <p>+ {calcDday}</p>
          </div>
          <Button className="text" onClick={() => router.push('/write')}>
            글쓰기
          </Button>
        </div>
      )}
      {path === '/write' && (
        <div className="write-header">
          <Button onClick={() => router.back()}>
            <Image src="/icons/arrow-back.svg" alt="" width={24} height={24} />
          </Button>
          <p>글쓰기</p>
        </div>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 1.6rem;

  border-bottom: 0.1rem solid var(--gray-border);
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #fff;
  .main-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .d-day {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      p {
        font-weight: 600;
        font-size: 2rem;
      }
    }
  }
  .write-header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    button {
      img {
        vertical-align: middle;
      }
    }
    p {
      font-size: 1.8rem;
    }
  }
`;
