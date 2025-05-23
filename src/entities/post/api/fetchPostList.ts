import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { firebaseDB } from '@/shared/lib/firebase';
import { PostListType } from '@/shared/types';

export const fetchPostList = async () => {
  try {
    const querySnapshot = await getDocs(query(collection(firebaseDB, 'posts'), orderBy('createdAt', 'desc')));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<PostListType, 'id'>),
    }));
  } catch (e) {
    console.log(e);
    throw new Error(`게시물을 가져오는데 실패했습니다.`);
  }
};
