// transfer API
import { TransferRequest } from '@/features/transfer/types/transfer.types';
import { balance } from '@/server/balance';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const processedKeys = new Set<string>();

export async function POST(request: Request) {
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
  if (balance.amount < amount) {
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
