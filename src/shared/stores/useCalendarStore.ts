import { create } from 'zustand';

interface State {
  date: string;
  currentDate: Date;
  setDate: (date: string) => void;
  setCurrentDate: (currentDate: Date) => void;
}

const useCalendarStore = create<State>(set => ({
  date: '',
  currentDate: new Date(),
  setDate: date => set({ date }),
  setCurrentDate: currentDate => set({ currentDate }),
}));

export default useCalendarStore;
