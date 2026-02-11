import { ViewProps } from 'react-native';

export type BalanceCardProps = ViewProps & {
  amount: number;
  currency?: string;
  accountType?: string;
  accountNumber?: string;
  compact?: boolean;
};
