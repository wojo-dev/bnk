import { Transaction } from '@/features/transaction/types/transaction.types';
import * as formatDate from '@/utils/get-format-date';
import { getTransactionSections } from './get-transaction-sections';

jest.mock('@/utils/get-format-date');
const mockGetIsTodayYesterday = jest.mocked(formatDate.getIsTodayYesterday);

const makeItem = (overrides: Partial<Transaction> = {}): Transaction => ({
  id: '1',
  recipientId: 'rcp_001',
  name: 'John',
  bank: 'Chase',
  amount: 100,
  currency: 'USD',
  status: 'completed',
  createdAt: '2025-01-15T10:00:00Z',
  ...overrides,
});

describe('getTransactionSections', () => {
  beforeEach(() => jest.resetAllMocks());

  it('returns empty array for empty input', () => {
    expect(getTransactionSections([])).toEqual([]);
  });

  it('groups items under a single section header', () => {
    mockGetIsTodayYesterday.mockReturnValue('Today');

    const items = [makeItem({ id: '1', name: 'Alice' }), makeItem({ id: '2', name: 'Bob' })];

    const result = getTransactionSections(items);

    expect(result).toEqual(['Today', items[0], items[1]]);
  });

  it('groups items into multiple sections', () => {
    const item1 = makeItem({ id: '1', createdAt: '2025-01-15T10:00:00Z' });
    const item2 = makeItem({ id: '2', createdAt: '2025-01-14T10:00:00Z' });
    const item3 = makeItem({ id: '3', createdAt: '2025-01-15T12:00:00Z' });

    mockGetIsTodayYesterday
      .mockReturnValueOnce('Today')
      .mockReturnValueOnce('Yesterday')
      .mockReturnValueOnce('Today');

    const result = getTransactionSections([item1, item2, item3]);

    expect(result).toEqual(['Today', item1, item3, 'Yesterday', item2]);
  });

  it('preserves insertion order within each group', () => {
    const items = [makeItem({ id: '1' }), makeItem({ id: '2' }), makeItem({ id: '3' })];
    mockGetIsTodayYesterday.mockReturnValue('Today');

    const result = getTransactionSections(items);

    expect(result).toEqual(['Today', items[0], items[1], items[2]]);
  });

  it('creates a separate section for each unique date label', () => {
    const items = [makeItem({ id: '1' }), makeItem({ id: '2' }), makeItem({ id: '3' })];
    mockGetIsTodayYesterday
      .mockReturnValueOnce('Today')
      .mockReturnValueOnce('Yesterday')
      .mockReturnValueOnce('January 10, 2025');

    const result = getTransactionSections(items);

    const headers = result.filter((item) => typeof item === 'string');
    expect(headers).toEqual(['Today', 'Yesterday', 'January 10, 2025']);
  });

  it('calls getIsTodayYesterday with each item createdAt', () => {
    mockGetIsTodayYesterday.mockReturnValue('Today');

    const items = [
      makeItem({ id: '1', createdAt: '2025-01-15T10:00:00Z' }),
      makeItem({ id: '2', createdAt: '2025-01-14T10:00:00Z' }),
    ];

    getTransactionSections(items);

    expect(mockGetIsTodayYesterday).toHaveBeenCalledTimes(2);
    expect(mockGetIsTodayYesterday).toHaveBeenCalledWith('2025-01-15T10:00:00Z');
    expect(mockGetIsTodayYesterday).toHaveBeenCalledWith('2025-01-14T10:00:00Z');
  });
});
