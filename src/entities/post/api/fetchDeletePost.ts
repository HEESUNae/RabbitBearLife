import { deleteDoc, doc } from 'firebase/firestore';
import { firebaseDB } from '@/shared/lib/firebase';

export const fetchDeletePost = async (postId: string) => {
  try {
    await deleteDoc(doc(firebaseDB, 'posts', postId));
  } catch (e) {
    console.log(e);
    throw new Error('글 삭제에 실패했습니다');
  }
};
