import { Transaction } from '@/features/transaction/types/transaction.types';
import { getIsTodayYesterday } from '@/utils/get-format-date';

export function getTransactionSections(transactions: Transaction[]): (string | Transaction)[] {
  const grouped: Record<string, Transaction[]> = {};

  for (const item of transactions) {
    const label = getIsTodayYesterday(item.createdAt);
    (grouped[label] ??= []).push(item);
  }

  const result: (string | Transaction)[] = [];
  for (const [title, data] of Object.entries(grouped)) {
    result.push(title, ...data);
  }
  return result;
}
