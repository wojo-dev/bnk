import { create } from 'zustand';
import { TransferDetailData } from '../components/transfer-detail/transfer-detail.type';
import { TransferRequest } from '../types/transfer';

type TransferStore = {
  transferDetail: TransferDetailData | null;
  transferRequest: TransferRequest | null;
  setTransferDetail: (detail: TransferDetailData) => void;
  setTransferRequest: (request: TransferRequest) => void;
  clearTransferDetail: () => void;
};

export const useTransferStore = create<TransferStore>((set) => ({
  transferDetail: null,
  transferRequest: null,
  setTransferDetail: (detail) => set({ transferDetail: detail }),
  setTransferRequest: (request) => set({ transferRequest: request }),
  clearTransferDetail: () => set({ transferDetail: null, transferRequest: null }),
}));
