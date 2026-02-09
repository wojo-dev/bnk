// transfer API
import { BalanceResponse } from '@/features/balance/types/balance';
import { apiClient } from '@/features/shared/lib/api-client';
import { TransferRequest, TransferResponse } from '@/features/transfer/types/transfer';

export async function POST(request: Request) {
  const { amount, description, date, recipientId } = (await request.json()) as TransferRequest;
  // check balance
  const balance = await apiClient.get<BalanceResponse>('/balance');
  if (balance.data.balance.amount < amount) {
    return Response.json({
      success: false,
      error: 'Insufficient balance',
    });
  }
  // create transfer
  const transfer = await apiClient.post<TransferResponse>('/transfer', {
    amount,
    description,
    date,
    recipientId,
  });
  return Response.json(transfer.data);
}
