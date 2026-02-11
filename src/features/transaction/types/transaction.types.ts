export type Transaction = {
  id: string;
  name: string;
  bank: string;
  amount: number;
  currency: string;
  status: TransactionStatus;
  createdAt: string;
};

export type TransactionStatus = 'completed' | 'pending';

export type TransactionPaginatedResponse = {
  data: Transaction[];
  nextPage: number | null;
};
