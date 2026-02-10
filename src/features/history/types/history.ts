// history types

export type History = {
  id: string;
  name: string;
  bank: string;
  amount: number;
  currency: string;
  status: TransactionStatus;
  createdAt: string;
};

export type TransactionStatus = 'completed' | 'pending';

export type HistoryPaginatedResponse = {
  data: History[];
  nextPage: number | null;
};
