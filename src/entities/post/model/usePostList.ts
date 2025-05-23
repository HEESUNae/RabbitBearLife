// 'use client';

import { useEffect, useState } from 'react';
import { usePostQuery } from './usePostQuery';
import { fetchDeleteImg } from '@/shared/lib/cloudinary';

export const usePostList = () => {
  const [isMore, setIsMore] = useState<boolean[]>([]);
  const { deletePostMutation, postLists } = usePostQuery();

  // 게시글 삭제
  const handleDelete = async (postId: string, imgUrl: string) => {
    try {
      // love 폴더에서 이미지 삭제
      const PUBLIC_ID = imgUrl.split('love/')[1].split('.')[0];
      await fetchDeleteImg(PUBLIC_ID);

      // 게시글 삭제 후 캐싱 무효화
      await deletePostMutation.mutateAsync(postId);
    } catch (e) {
      console.error('삭제 중 오류 발생:', e);
    }
  };

  // 선택한 리스트의 more 드롭다운 활성화
  const handleMoreActive = (idx: number) => {
    setIsMore((prev) => prev.map((val, i) => (i === idx ? !prev[idx] : val)));
  };

  useEffect(() => {
    if (!postLists.data) return;
    setIsMore(new Array(postLists.data?.length).fill(false));
  }, [postLists.data]);

  return {
    postLists,
    handleMoreActive,
    handleDelete,
    isMore,
  };
};
