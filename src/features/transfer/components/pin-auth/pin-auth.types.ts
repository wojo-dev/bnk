import { TransferDetailData } from '../transfer-detail/transfer-detail.type';

export type PinAuthProps = {
  transferDetail: TransferDetailData | null;
  onSuccess: () => void;
};
