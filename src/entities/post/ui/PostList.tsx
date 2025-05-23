'use client';

import Image from 'next/image';
import styled from '@emotion/styled';
import { Button } from '@/shared/components';
import { usePostList } from '../model/usePostList';

export const PostList = () => {
  const { postLists, handleMoreActive, isMore, handleDelete, handleUpdate } = usePostList();
  console.log(postLists.data);

  return (
    <StyledPostList>
      <ul>
        {postLists.data?.map((item, idx) => (
          <li key={item.id}>
            <div className="post-header">
              <div>
                <p className="title">{item.title}</p>
                <p className="date">{item.createdAt?.toDate().toLocaleString()}</p>
              </div>
              <div className="more">
                <Button onClick={() => handleMoreActive(idx)}>
                  <Image src="/icons/more.svg" alt="" width={24} height={24} />
                </Button>
                {isMore[idx] && (
                  <div className="more-menu">
                    <Button onClick={() => handleUpdate(item.id)}>수정하기</Button>
                    <Button onClick={() => handleDelete(item.id, item.imgUrl)}>삭제하기</Button>
                  </div>
                )}
              </div>
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
      height: 30rem;
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

  .more {
    position: relative;
    .more-menu {
      position: absolute;
      top: 3rem;
      right: 0;
      border-radius: 0.6rem;
      background-color: #fff;
      border: 0.1rem solid var(--gray-border);
      z-index: 999;
      button {
        font-size: 1.4rem;
        word-break: keep-all;
        padding: 1rem;
        &:first-of-type {
          border-bottom: 0.1rem solid var(--gray-border);
        }
      }
    }
  }
`;
