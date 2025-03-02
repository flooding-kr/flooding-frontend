import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  gender: string;
  student_info: {
    isGraduate: boolean;
    grade: number;
    classroom: number;
    number: number;
    year: number;
  };
  stuNum?: number;
}

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<UserState>(set => ({
  user: null,
  setUser: user => set({ user }),
}));
