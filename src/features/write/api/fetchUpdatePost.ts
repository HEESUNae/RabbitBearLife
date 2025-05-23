import { doc, updateDoc } from 'firebase/firestore';
import { firebaseDB } from '@/shared/lib/firebase';
import { PostListType } from '@/shared/types';

// 글 수정하기
export const fetchUpdatePost = async (postId: string, payload: Partial<PostListType>) => {
  try {
    await updateDoc(doc(firebaseDB, 'posts', postId), payload);
  } catch (e) {
    throw new Error(`글 수정 실패 ${e}`);
  }
};
