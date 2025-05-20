import { create } from 'zustand';

interface ModalPageState {
  modalPage: number;
  setModalPage: (page: number) => void;
}

interface SignupState {
  name: string;
  email: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  resetSignupData: () => void;
}

export const useModalPageStore = create<ModalPageState>(set => ({
  modalPage: 0,
  setModalPage: page => set({ modalPage: page }),
}));

export const useSignupStore = create<SignupState>(set => ({
  name: '',
  email: '',
  setName: name => set({ name }),
  setEmail: email => set({ email }),
  resetSignupData: () => set({ name: '', email: '' }),
}));
