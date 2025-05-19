import { Timestamp } from 'firebase/firestore';

export interface PostListType {
  id: string;
  title: string;
  imgUrl: string;
  content?: string;
  createdAt?: Timestamp;
}
