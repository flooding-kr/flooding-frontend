import { create } from 'zustand';

interface Store {
  studentIds: string[];
  period: number;
  setStudentIds: (studentIds: string[]) => void;
  setPeriod: (period: number) => void;
}

export const useAttendStore = create<Store>(set => ({
  studentIds: [],
  period: 6,
  setStudentIds: (studentIds: string[]) => set({ studentIds }),
  setPeriod: (period: number) => set({ period }),
}));
