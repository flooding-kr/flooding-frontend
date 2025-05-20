import { create } from 'zustand';

import { Image } from '@/shared/types/image';

interface Store {
  profileImage: Image | null;
  images: Image[];
  setProfileImage: (image: Image | null) => void;
  setImages: (images: Image[]) => void;
}

export const useImageStore = create<Store>(set => ({
  profileImage: null,
  images: [],
  setProfileImage: (image: Image | null) => set({ profileImage: image }),
  setImages: (images: Image[]) => set({ images }),
}));
