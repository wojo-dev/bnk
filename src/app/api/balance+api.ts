// balance API
import { balance } from '@/server/balance';

export async function GET() {
  return Response.json({ balance: { amount: balance.amount }, success: true });
}
