import { create } from 'zustand';

interface Store {
  check: boolean;
  setCheck: (check: boolean) => void;
}

export const useCheckStore = create<Store>(set => ({
  check: false,
  setCheck: (check: boolean) => set({ check }),
}));
