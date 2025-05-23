'use server';

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

// 이미지 삭제
export const fetchDeleteImg = async (imgUrl: string) => {
  try {
    // love 폴더에서 이미지 삭제
    const PUBLIC_ID = imgUrl.split('love/')[1].split('.')[0] ?? '';
    await cloudinary.uploader.destroy(`love/${PUBLIC_ID}`);
  } catch (e) {
    throw new Error(`이미지 삭제에 실패했습니다. ${e}`);
  }
};

// 이미지 업로드
export const updateImgFile = async (imgFile: File) => {
  try {
    if (!imgFile) throw new Error('이미지가 없습니다');

    const formData = new FormData();
    formData.append('file', imgFile);
    formData.append('upload_preset', 'rabbitBearLife');
    formData.append('folder', 'love');

    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
    return await fetch(url, { method: 'POST', body: formData }).then((res) => res.json());
  } catch (e) {
    throw new Error(`사진 업로드에 실패했습니다. ${e}`);
  }
};
