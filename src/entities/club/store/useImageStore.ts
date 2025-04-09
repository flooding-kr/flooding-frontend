import { create } from 'zustand';

interface Store {
  profileImage: string;
  images: string[];
  setProfileImage: (image: string) => void;
  setImages: (images: string[]) => void;
}

export const useImageStore = create<Store>(set => ({
  profileImage: '',
  images: [],
  setProfileImage: (image: string) => set({ profileImage: image }),
  setImages: (images: string[]) => set({ images }),
}));
