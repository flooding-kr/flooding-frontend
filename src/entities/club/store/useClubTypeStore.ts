import { create } from 'zustand';

import { ClubType } from '@/shared/types/types/clubListType';

interface Store {
  type: ClubType;
  setType: (type: ClubType) => void;
}

export const useClubTypeStore = create<Store>(set => ({
  type: 'AUTONOMOUS',
  setType: (type: ClubType) => set({ type }),
}));
