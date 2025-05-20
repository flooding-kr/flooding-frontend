import { create } from 'zustand';

interface EmailState {
  email: string;
  setEmail: (email: string) => void;
}

export const useEmailStore = create<EmailState>(set => ({
  email: '',
  setEmail: email => set({ email }),
}));
