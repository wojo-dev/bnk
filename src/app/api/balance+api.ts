// balance API
import { requireAuth } from '@/server/auth';
import { balance } from '@/server/balance';

export async function GET(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  return Response.json({ balance: { amount: balance.amount }, success: true });
}
