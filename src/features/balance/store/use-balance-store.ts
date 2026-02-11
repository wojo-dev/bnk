import { create } from 'zustand';

type BalanceStore = {
  isHidden: boolean;
  toggle: () => void;
};

export const useBalanceStore = create<BalanceStore>((set) => ({
  isHidden: false,
  toggle: () => set((state) => ({ isHidden: !state.isHidden })),
}));
