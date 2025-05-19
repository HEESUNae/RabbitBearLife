import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { firebaseDB } from '@/shared/lib/firebase';
import { PostListType } from '@/shared/types';

// 새로운 글 작성
export const fetchCreatePost = async (dbName: string, payload: PostListType) => {
  try {
    const docRef = await addDoc(collection(firebaseDB, dbName), { ...payload, createdAt: serverTimestamp() });
    console.log('Document written with ID: ', docRef.id);
    return docRef;
  } catch (e) {
    console.log(e);
    throw new Error(`새로운 글 작성에 실패했습니다. 다시 시도해주세요. ${e}`);
  }
};
