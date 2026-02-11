import { ViewProps } from 'react-native';

export type TransferStatus = 'completed' | 'pending' | 'failed';

export type TransferDetailData = {
  amount: string;
  currency: string;
  recipientName: string;
  bank: string;
  accountNumber: string;
  dateTime: string;
  reference: string;
  note?: string;
  status: TransferStatus;
};

export type TransferDetailProps = ViewProps & {
  data: TransferDetailData;
};
