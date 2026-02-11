import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';

dayjs.extend(isToday);
dayjs.extend(isYesterday);

export function getFormatDate(date: string) {
  return dayjs(date).format('MMMM D, YYYY');
}

export function getFormatTime(date: string) {
  return dayjs(date).format('h:mm A');
}

export function getIsTodayYesterday(date: string) {
  const d = dayjs(date);
  if (d.isToday()) return 'Today';
  if (d.isYesterday()) return 'Yesterday';
  return d.format('MMMM D, YYYY');
}
