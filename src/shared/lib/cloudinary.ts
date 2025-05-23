'use server';

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

// 이미지 삭제
export const fetchDeleteImg = async (public_id: string) => {
  try {
    await cloudinary.uploader.destroy(`love/${public_id}`);
  } catch (e) {
    throw new Error(`이미지 삭제에 실패했습니다. ${e}`);
  }
};
