// balance types

export type Balance = {
  id: string;
  amount: number;
  currency: string;
  createdAt: string;
  updatedAt: string;
};

export type BalanceResponse = {
  balance: Balance;
  success: boolean;
  error?: string;
};

export type BalanceRequest = {
  amount: number;
  currency: string;
  createdAt: string;
  updatedAt: string;
};
