import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PostListType } from '@/shared/types';
import { fetchCreatePost } from '../api/fetchPost';
import { updateImgFile } from '../api/fetchUploadImg';
import { useRouter } from 'next/navigation';

export const useWriteForm = () => {
  const form = useForm<PostListType>();
  const [imgFile, setImgFile] = useState<null | File>(null);
  const router = useRouter();

  // 이미지 파일 데이터 가져오기
  const handleImgFile = (imgFile: File) => {
    setImgFile(imgFile);
  };

  // 새로운 글 작성
  const formSubmit = async (formData: PostListType) => {
    try {
      const uploadImgRes = await updateImgFile(imgFile!);
      const res = await fetchCreatePost('posts', { ...formData, imgUrl: uploadImgRes.secure_url });
      router.push('/main');
      //todo: 토스트 팝업 on!
      console.log('res', res);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    form,
    formSubmit,
    handleImgFile,
  };
};
