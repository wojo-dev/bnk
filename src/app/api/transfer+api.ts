// transfer API
import { TransferRequest } from '@/features/transfer/types/transfer.types';
import { deductBalance, getBalance } from '@/server/data/balance.data';
import { recipients } from '@/server/data/recipients.data';
import { addTransaction, getTransactions } from '@/server/data/transaction.data';
import { requireAuth } from '@/server/utils/auth';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const processedKeys = new Set<string>();

export async function POST(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  const idempotencyKey = request.headers.get('Idempotency-Key');

  if (idempotencyKey && processedKeys.has(idempotencyKey)) {
    return Response.json({
      success: true,
      message: 'Transfer already processed',
    });
  }

  await delay(2000);
  const { amount, description, date, recipientId } = (await request.json()) as TransferRequest;
  // check balance
  if (getBalance() < amount) {
    return Response.json(
      {
        success: false,
        error: 'Insufficient balance',
      },
      {
        status: 400,
      },
    );
  }

  deductBalance(amount);

  const recipient = recipients.find((r) => r.id === recipientId);
  const newId = String(getTransactions().length + 1);

  addTransaction({
    id: newId,
    recipientId,
    name: recipient?.name ?? 'Unknown',
    bank: recipient?.bank ?? 'Unknown',
    currency: 'RM',
    amount,
    status: 'completed',
    createdAt: date ?? new Date().toISOString(),
  });

  if (idempotencyKey) {
    processedKeys.add(idempotencyKey);
  }

  return Response.json({
    success: true,
    message: 'Transfer successful',
    data: {
      amount,
      description,
      date,
      recipientId,
    },
  });
}
