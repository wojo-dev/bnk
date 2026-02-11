import { Recipient } from '@/features/recipients/types/recipient.types';
import { z } from 'zod';

export const transferFormSchema = z.object({
  amount: z.number().min(1, 'Amount must be at least RM 1'),
  description: z.string().min(1, 'Description is required'),
  date: z.string().min(1),
  recipientId: z.string().min(1),
});

export type TransferFormSchema = z.infer<typeof transferFormSchema>;

export const defaultValues: TransferFormSchema = {
  amount: 0,
  description: '',
  date: new Date().toISOString(),
  recipientId: '',
};

export type TransferFormProps = {
  recipient: Recipient;
  balance: number;
  onTransfer: (data: TransferFormSchema) => Promise<void>;
};
