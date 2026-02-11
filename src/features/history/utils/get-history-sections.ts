import { History } from '@/features/history/types/history.types';
import { getIsTodayYesterday } from '@/utils/get-format-date';

export function getHistorySections(history: History[]): (string | History)[] {
  const grouped: Record<string, History[]> = {};

  for (const item of history) {
    const label = getIsTodayYesterday(item.createdAt);
    (grouped[label] ??= []).push(item);
  }

  const result: (string | History)[] = [];
  for (const [title, data] of Object.entries(grouped)) {
    result.push(title, ...data);
  }
  return result;
}
