import { create } from 'zustand';

interface State {
  state: string;
  setState: (state: string) => void;
}

const useFilterStore = create<State>(set => ({
  state: '',
  setState: (state: string) => set({ state }),
}));

export default useFilterStore;
