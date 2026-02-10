import { z } from 'zod';

export const transferFormSchema = z.object({
  amount: z.number().min(1),
  description: z.string().min(1),
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
