import { useQuery } from '@tanstack/react-query';
import { fetchPostList } from '../api/fetchPostList';

export const usePostList = () => {
  const postLists = useQuery({
    queryKey: ['postLists'],
    queryFn: fetchPostList,
  });

  return {
    postLists,
  };
};
