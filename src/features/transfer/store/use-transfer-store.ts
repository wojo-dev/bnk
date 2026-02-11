import { create } from 'zustand';
import { TransferDetailData } from '../components/transfer-detail/transfer-detail.type';

type TransferStore = {
  transferDetail: TransferDetailData | null;
  setTransferDetail: (detail: TransferDetailData) => void;
  clearTransferDetail: () => void;
};

export const useTransferStore = create<TransferStore>((set) => ({
  transferDetail: null,
  setTransferDetail: (detail) => set({ transferDetail: detail }),
  clearTransferDetail: () => set({ transferDetail: null }),
}));
