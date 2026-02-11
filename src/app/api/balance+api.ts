// balance API
import { getBalance } from '@/server/data/balance.data';
import { requireAuth } from '@/server/utils/auth';

export async function GET(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  return Response.json({ balance: { amount: getBalance() }, success: true });
}
