'use client';

import Image from 'next/image';
import styled from '@emotion/styled';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface FileUploadProps {
  label?: string;
  required?: boolean;
  form: UseFormReturn;
}

export const FileUpload = ({ label, required, form, ...rest }: FileUploadProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // 이미지 미리보기
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    }
  };

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
          required: true,
          onChange: handleImageChange,
        })}
        {...rest}
      />
      <label className="photo-upload" htmlFor="fileUpload">
        <Image src={previewUrl ?? '/icons/photo.svg'} alt="" fill={!!previewUrl} width={previewUrl ? 0 : 50} height={previewUrl ? 0 : 50} />
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
