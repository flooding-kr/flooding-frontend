import { create } from 'zustand';

interface State {
  date: string;
  setDate: (date: string) => void;
}

const useCalendarStore = create<State>(set => ({
  date: '',
  setDate: date => set({ date }),
}));

export default useCalendarStore;
