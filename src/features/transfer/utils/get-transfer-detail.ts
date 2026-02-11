import { Recipient } from '@/features/recipients/types/recipient.types';
import { getFormatDate, getFormatTime } from '@/utils/get-format-date';
import { TransferDetailData } from '../components/transfer-detail/transfer-detail.type';
import { TransferFormSchema } from '../components/transfer-form/transfer-form.types';

export function getTransferDetail(
  data: TransferFormSchema,
  recipient: Recipient,
): TransferDetailData {
  return {
    amount: data.amount.toFixed(2),
    currency: 'RM',
    recipientName: recipient.name,
    bank: recipient.bank,
    accountNumber: recipient.maskedNumber,
    dateTime: `${getFormatDate(data.date)}, ${getFormatTime(data.date)}`,
    reference: `BNK-${Date.now()}`,
    note: data.description || undefined,
    status: 'completed',
  };
}
