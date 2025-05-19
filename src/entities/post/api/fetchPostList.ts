import { collection, getDocs } from 'firebase/firestore';
import { firebaseDB } from '@/shared/lib/firebase';
import { PostListType } from '@/shared/types';

export const fetchPostList = async () => {
  try {
    const querySnapshot = await getDocs(collection(firebaseDB, 'posts'));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<PostListType, 'id'>),
    }));
  } catch (e) {
    console.log(e);
    throw new Error(`게시물을 가져오는데 실패했습니다.`);
  }
};
