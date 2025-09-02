import { create } from 'zustand';

interface Store {
  id: string;
  period: number;
  setId: (id: string) => void;
  setPeriod: (period: number) => void;
}

export const useClubStore = create<Store>(set => ({
  id: '',
  period: 8,
  setId: (id: string) => set({ id }),
  setPeriod: (period: number) => set({ period }),
}));
