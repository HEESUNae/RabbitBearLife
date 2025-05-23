'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { UseFormReturn } from 'react-hook-form';
import { PostListType } from '../types';
import { useSearchParams } from 'next/navigation';

interface FileUploadProps {
  label?: string;
  required?: boolean;
  form: UseFormReturn<PostListType>;
  handleImgFile: (imgFile: File) => void;
  updateData?: PostListType;
}

export const FileUpload = ({ label, required, form, handleImgFile, updateData, ...rest }: FileUploadProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const parmasId = useSearchParams().get('id');

  // 이미지 변경시
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
      handleImgFile(file);
    }
  };

  // 글 수정시 이미지 미리보기
  useEffect(() => {
    if (!parmasId || !updateData) return;
    setPreviewUrl(updateData?.imgUrl);
    form.setValue('imgUrl', '');
  }, [parmasId, updateData]);

  return (
    <StyledFileUpload>
      {label && (
        <label>
          {label}
          {required && <span>*</span>}
        </label>
      )}
      <input
        type="file"
        id="fileUpload"
        accept="image/*"
        {...form.register('imgUrl', {
          required: parmasId ? false : true, // 새글작성시에만 true, 수정시엔 false
          onChange: handleImageChange,
        })}
        {...rest}
      />
      <label className="photo-upload" htmlFor="fileUpload">
        {previewUrl ? <Image src={previewUrl} alt="" fill /> : <Image src="/icons/photo.svg" alt="" width={50} height={50} />}
      </label>
    </StyledFileUpload>
  );
};

const StyledFileUpload = styled.div`
  input {
    display: none;
  }
  label {
    font-size: 1.6rem;
    position: relative;
    margin-bottom: 0.4rem;
    display: block;
    span {
      color: var(--main);
    }
    img {
      object-fit: cover;
    }
  }
  .photo-upload {
    background-color: var(--gray-back);
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.6rem;
  }
`;
