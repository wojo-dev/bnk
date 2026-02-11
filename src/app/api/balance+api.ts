// balance API
import { balance } from '@/server/balance';

export async function GET() {
  return Response.json({ balance: balance.amount, success: true });
}
