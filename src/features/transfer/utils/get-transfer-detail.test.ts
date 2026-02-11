import { Recipient } from '@/features/recipients/types/recipient.types';
import { TransferFormSchema } from '../components/transfer-form/transfer-form.types';
import { getTransferDetail } from './get-transfer-detail';

const mockRecipient: Recipient = {
  id: '1',
  name: 'Sarah Lim',
  initials: 'SL',
  bank: 'Maybank',
  bankCode: 'MBB',
  accountNumber: '1234567392',
  maskedNumber: '•••• 7392',
  isFavourite: true,
  avatarColor: '#4F46E5',
  addedAt: '2025-01-01T00:00:00Z',
};

const mockFormData: TransferFormSchema = {
  amount: 250,
  description: 'Lunch yesterday',
  date: '2026-02-09T09:42:00Z',
  recipientId: '1',
};

describe('getTransferDetail', () => {
  beforeEach(() => {
    jest.spyOn(Date, 'now').mockReturnValue(1707400000000);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('maps form data and recipient to transfer detail', () => {
    const result = getTransferDetail(mockFormData, mockRecipient);

    expect(result).toEqual({
      amount: '250.00',
      currency: 'RM',
      recipientName: 'Sarah Lim',
      bank: 'Maybank',
      accountNumber: '•••• 7392',
      dateTime: expect.stringContaining('February 9, 2026'),
      reference: 'BNK-1707400000000',
      note: 'Lunch yesterday',
      status: 'completed',
    });
  });

  it('formats amount with two decimal places', () => {
    const data = { ...mockFormData, amount: 100 };
    const result = getTransferDetail(data, mockRecipient);

    expect(result.amount).toBe('100.00');
  });

  it('sets note to undefined when description is empty', () => {
    const data = { ...mockFormData, description: '' };
    const result = getTransferDetail(data, mockRecipient);

    expect(result.note).toBeUndefined();
  });
});
