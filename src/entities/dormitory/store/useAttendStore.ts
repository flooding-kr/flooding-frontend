import { create } from 'zustand';

interface Store {
  attend: boolean;
  setAttend: (attend: boolean) => void;
}

export const useAttendStore = create<Store>(set => ({
  attend: false,
  setAttend: (attend: boolean) => set({ attend }),
}));
