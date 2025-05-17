import { create } from 'zustand';

interface Store {
  type: string;
  modal: boolean;
  setType: (type: string) => void;
  setModal: (modal: boolean) => void;
}

export const useNotifyStore = create<Store>(set => ({
  type: '',
  modal: false,
  setType: (type: string) => set({ type }),
  setModal: (modal: boolean) => set({ modal }),
}));
