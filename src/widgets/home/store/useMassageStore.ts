import { create } from 'zustand';

import { DormitoryData } from '@/shared/types/home';

interface Store {
  massage: DormitoryData;
  setMassage: (massage: DormitoryData) => void;
}

export const useMassageStore = create<Store>(set => ({
  massage: { current_count: 0, limit: 0, status: 'IMPOSSIBLE' },
  setMassage: (massage: DormitoryData) => set({ massage }),
}));
