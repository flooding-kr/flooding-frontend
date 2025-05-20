import { create } from 'zustand';

import { DormitoryData } from '@/shared/types/home';

interface Store {
  selfStudy: DormitoryData;
  setSelfStudy: (selfStudy: DormitoryData) => void;
}

export const useSelfStudyStore = create<Store>(set => ({
  selfStudy: { current_count: 0, limit: 0, status: 'IMPOSSIBLE' },
  setSelfStudy: (selfStudy: DormitoryData) => set({ selfStudy }),
}));
