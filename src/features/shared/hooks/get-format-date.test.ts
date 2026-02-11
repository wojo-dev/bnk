import dayjs from 'dayjs';
import { getFormatDate, getFormatTime, getIsTodayYesterday } from './get-format-date';

describe('getFormatDate', () => {
  it('formats a date as "MMMM D, YYYY"', () => {
    expect(getFormatDate('2025-03-05T10:00:00Z')).toBe('March 5, 2025');
  });

  it('handles different months and days', () => {
    expect(getFormatDate('2024-12-25T00:00:00Z')).toBe('December 25, 2024');
  });
});

describe('getFormatTime', () => {
  it('formats time as "h:mm A"', () => {
    expect(getFormatTime('2025-01-15T14:30:00Z')).toMatch(/\d{1,2}:\d{2} (AM|PM)/);
  });
});

describe('getIsTodayYesterday', () => {
  it('returns "Today" for today\'s date', () => {
    const today = dayjs().toISOString();
    expect(getIsTodayYesterday(today)).toBe('Today');
  });

  it('returns "Yesterday" for yesterday\'s date', () => {
    const yesterday = dayjs().subtract(1, 'day').toISOString();
    expect(getIsTodayYesterday(yesterday)).toBe('Yesterday');
  });

  it('returns formatted date for older dates', () => {
    const oldDate = '2024-06-15T10:00:00Z';
    expect(getIsTodayYesterday(oldDate)).toBe('June 15, 2024');
  });
});
