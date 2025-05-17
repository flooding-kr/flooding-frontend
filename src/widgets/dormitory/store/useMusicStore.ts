import { create } from 'zustand';

import { Music } from '@/shared/types/music';

interface Store {
  music: Music[];
  setMusic: (music: Music[]) => void;
}

export const useMusicStore = create<Store>(set => ({
  music: [],
  setMusic: (music: Music[]) => set({ music }),
}));
