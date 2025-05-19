'use client';

import styled from '@emotion/styled';
import { useWriteForm } from '../model/useWriteForm';
import { Button, Input, Textarea } from '@/shared/components';
import { FileUpload } from '@/shared/components/FileUpload';

export const WriteForm = () => {
  const { form, formSubmit, handleImgFile } = useWriteForm();

  return (
    <StyledWriteForm onSubmit={form.handleSubmit(formSubmit)}>
      <FileUpload label="사진" required form={form} handleImgFile={handleImgFile} />
      <Input label="제목" required {...form.register('title', { required: true })} />
      <Textarea label="내용" {...form.register('content')} />
      <Button type="submit" className="fill" disabled={!form.formState.isValid}>
        작성하기
      </Button>
    </StyledWriteForm>
  );
};

const StyledWriteForm = styled.form`
  display: grid;
  gap: 1.6rem;
  padding: 1.6rem 1.2rem;
`;
