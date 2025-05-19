import { useQuery } from '@tanstack/react-query';
import { fetchPostList } from '../api/fetchPostList';
import { PostListType } from '@/shared/types';

export const usePostList = () => {
  const postLists = useQuery<PostListType[]>({
    queryKey: ['postLists'],
    queryFn: fetchPostList,
  });

  return {
    postLists,
  };
};
