'use client';

import Image from 'next/image';
import styled from '@emotion/styled';
import { Button } from '@/shared/components';
import { usePostList } from '../model/usePostList';

export const PostList = () => {
  const { postLists } = usePostList();

  return (
    <StyledPostList>
      <ul>
        {postLists.data?.map((item) => (
          <li key={item.id}>
            <div className="post-header">
              <div>
                <p className="title">{item.title}</p>
                <p className="date">{item.createdAt?.toLocaleString()}</p>
              </div>
              <Button>
                <Image src="/icons/more.svg" alt="" width={24} height={24} />
              </Button>
            </div>
            <div className="photo">
              <Image src={item.imgUrl ?? '/icons/photo.svg'} fill alt="" />
            </div>
            <p className="content">{item.content}</p>
          </li>
        ))}
      </ul>
      <p className="end">- End -</p>
    </StyledPostList>
  );
};

const StyledPostList = styled.div`
  li {
    padding: 1.6rem 1.2rem;
    border-bottom: 0.1rem solid var(--gray-border);
    .post-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title {
        font-size: 1.6rem;
      }
      .date {
        font-size: 1.2rem;
        color: var(--gray-text);
      }
    }
    .photo {
      position: relative;
      width: 100%;
      height: 20rem;
      background-color: var(--gray-back);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.6rem;
      margin: 1.6rem 0;
      img {
        object-fit: cover;
      }
    }
    .content {
      color: var(--gray-text);
    }
  }
  .end {
    color: var(--gray-text);
    padding: 2rem;
    text-align: center;
  }
`;
