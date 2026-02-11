import { recipients } from '@/server/data/recipients.data';
import { getTransactions } from '@/server/data/transaction.data';
import { requireAuth } from '@/server/utils/auth';

export async function GET(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  const transactions = getTransactions();

  // Get the most recent transaction date per recipient
  const latestByRecipient = new Map<string, string>();
  for (const t of transactions) {
    if (!latestByRecipient.has(t.recipientId)) {
      latestByRecipient.set(t.recipientId, t.createdAt);
    }
  }

  const recent = recipients
    .filter((r) => latestByRecipient.has(r.id))
    .sort(
      (a, b) =>
        new Date(latestByRecipient.get(b.id)!).getTime() -
        new Date(latestByRecipient.get(a.id)!).getTime(),
    )
    .slice(0, 6);

  return Response.json({ data: recent });
}
