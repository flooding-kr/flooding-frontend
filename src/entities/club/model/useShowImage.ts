'use client';

import { Image } from '@/shared/types/image';

import { postImage } from '../api/postImage';
import { useImageStore } from '../store/useImageStore';

export const useShowImage = () => {
  const { images, setImages, setProfileImage } = useImageStore();

  const handleAddImages = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const imageFiles = Array.from(event.target.files);

    const formData = new FormData();
    imageFiles.forEach(file => {
      formData.append('images', file);
    });
    try {
      const response = await postImage(formData);
      const uploadedUrls: Image[] = response.data.image_urls;

      const updatedImages = [...images, ...uploadedUrls].slice(0, 10);
      setImages(updatedImages);
    } catch (error) {
      console.log(formData);
      console.error('이미지 업로드 실패:', error);
    }
  };

  const handleAddProfileImages = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('images', file);

    try {
      const { data } = await postImage(formData);
      const uploadedUrl: Image = data.image_urls[0];
      setProfileImage(uploadedUrl);
    } catch (error) {
      console.log(formData);
      console.error('프로필 이미지 업로드 실패:', error);
    }
  };
  const handleRemoveImage = (targetUrl: string) => {
    const filtered = images.filter((url: Image) => url.presigned_url !== targetUrl);
    setImages(filtered);
  };

  const handleRemoveProfileImage = () => {
    setProfileImage(null);
  };

  return {
    handleAddImages,
    handleAddProfileImages,
    handleRemoveImage,
    handleRemoveProfileImage,
  };
};
