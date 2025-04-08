'use client';

import { useImageStore } from '../store/useImageStore';

export const useShowImage = () => {
  const { images, setImages, setProfileImage } = useImageStore();

  const handleAddImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const imageFiles = Array.from(event.target.files);
    let imageUrlLists = [...images];

    imageFiles.forEach(file => {
      const currentImageUrl = URL.createObjectURL(file);
      imageUrlLists.push(currentImageUrl);
    });

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setImages(imageUrlLists);
  };

  const handleAddProfileImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const imageFiles = Array.from(event.target.files);

    imageFiles.forEach(file => {
      const currentImageUrl = URL.createObjectURL(file);
      setProfileImage(currentImageUrl);
    });
  };

  const handleRemoveImage = (targetUrl: string) => {
    const filtered = images.filter(url => url !== targetUrl);
    setImages(filtered);
  };

  const handleRemoveProfileImage = () => {
    setProfileImage('');
  };

  return {
    handleAddImages,
    handleAddProfileImages,
    handleRemoveImage,
    handleRemoveProfileImage,
  };
};
