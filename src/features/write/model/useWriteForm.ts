import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { fetchCreatePost } from '../api/fetchCreatePost';
import { fetchUpdatePost } from '../api/fetchUpdatePost';
import { fetchDeleteImg, updateImgFile } from '@/shared/lib/cloudinary';
import { usePostQuery } from '@/entities/post/model/usePostQuery';
import { PostListType } from '@/shared/types';

export const useWriteForm = () => {
  const form = useForm<PostListType>();
  const router = useRouter();
  const paramsId = useSearchParams().get('id');
  const { postLists } = usePostQuery();
  const [imgFile, setImgFile] = useState<null | File>(null);

  // 선택한 이미지 파일 데이터 가져오기
  const handleImgFile = (imgFile: File) => {
    setImgFile(imgFile);
  };

  const formSubmit = async (formData: PostListType) => {
    try {
      let imgUrl = formData.imgUrl;

      if (imgFile) {
        if (paramsId && updateData?.imgUrl) {
          await fetchDeleteImg(updateData.imgUrl); // 기존 이미지 삭제
        }

        const uploadImgRes = await updateImgFile(imgFile);
        imgUrl = uploadImgRes.secure_url;
      }

      const payload = { ...formData, imgUrl };

      if (paramsId) {
        await fetchUpdatePost(paramsId, payload); // 수정
      } else {
        await fetchCreatePost('posts', payload); // 새 글 생성
      }
      router.push('/main');
    } catch (e) {
      console.log(e);
      alert('글 작성에 실패했습니다.');
    }
  };

  // 수정하기 데이터 설정
  const updateData = useMemo(() => {
    return postLists.data?.find((item) => item.id === paramsId);
  }, [postLists.data, paramsId]);

  useEffect(() => {
    if (updateData) {
      form.reset({
        title: updateData.title,
        content: updateData.content,
      });
    }
  }, [updateData]);

  return {
    form,
    formSubmit,
    handleImgFile,
    updateData,
  };
};
