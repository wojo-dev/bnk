// transfer types

export type Transfer = {
  id: string;
  amount: number;
  description: string;
  date: string;
  recipientId: string;
};

export type TransferResponse = {
  transfer: Transfer;
  success: boolean;
  error?: string;
};

export type TransferRequest = {
  amount: number;
  description: string;
  date: string;
  recipientId: string;
};
