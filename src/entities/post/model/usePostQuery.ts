import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchDeletePost } from '../api/fetchDeletePost';
import { fetchPostList } from '../api/fetchPostList';
import { PostListType } from '@/shared/types';

export const usePostQuery = () => {
  const queryClient = useQueryClient();

  // 게시글 가져오기 query
  const postLists = useQuery<PostListType[]>({
    queryKey: ['postLists'],
    queryFn: fetchPostList,
  });

  // 게시글 삭제하기 mutation
  const deletePostMutation = useMutation({
    mutationFn: (postId: string) => fetchDeletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postLists'] });
    },
  });

  return {
    postLists,
    deletePostMutation,
  };
};
