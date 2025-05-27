import { create } from 'zustand';

import { OrderType } from '@/shared/types/music';

interface Store {
  type: OrderType;
  setType: (type: OrderType) => void;
}

export const useMusicTypeStore = create<Store>(set => ({
  type: 'LIKES',
  setType: (type: OrderType) => set({ type }),
}));
