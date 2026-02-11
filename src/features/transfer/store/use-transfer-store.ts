import { create } from 'zustand';
import { TransferDetailData } from '../components/transfer-detail/transfer-detail.type';
import { TransferRequest } from '../types/transfer.types';

type TransferStore = {
  transferDetail: TransferDetailData | null;
  transferRequest: TransferRequest | null;
  authTimestamp: number | null;
  setTransferDetail: (detail: TransferDetailData) => void;
  setTransferRequest: (request: TransferRequest) => void;
  setAuthTimestamp: (timestamp: number) => void;
  clearTransferDetail: () => void;
};

export const useTransferStore = create<TransferStore>((set) => ({
  transferDetail: null,
  transferRequest: null,
  authTimestamp: null,
  setTransferDetail: (detail) => set({ transferDetail: detail }),
  setTransferRequest: (request) => set({ transferRequest: request }),
  setAuthTimestamp: (timestamp) => set({ authTimestamp: timestamp }),
  clearTransferDetail: () =>
    set({ transferDetail: null, transferRequest: null, authTimestamp: null }),
}));
