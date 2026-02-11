import { recipients } from '@/server/data/recipients.data';
import { getTransactions } from '@/server/data/transaction.data';
import { requireAuth } from '@/server/utils/auth';
import { paginate } from '@/server/utils/helpers';

export async function GET(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  const url = new URL(request.url);
  const search = url.searchParams.get('q')?.toLowerCase();
  const favourites = url.searchParams.get('favourites');

  const transactions = getTransactions();
  const latestByRecipient = new Map<string, string>();
  for (const t of transactions) {
    if (!latestByRecipient.has(t.recipientId)) {
      latestByRecipient.set(t.recipientId, t.createdAt);
    }
  }

  let filtered = [...recipients].sort((a, b) => {
    const aTime = latestByRecipient.get(a.id);
    const bTime = latestByRecipient.get(b.id);
    if (!aTime && !bTime) return 0;
    if (!aTime) return 1;
    if (!bTime) return -1;
    return new Date(bTime).getTime() - new Date(aTime).getTime();
  });

  if (favourites === 'true') {
    filtered = filtered.filter((r) => r.isFavourite);
  }

  if (search) {
    filtered = filtered.filter(
      (r) =>
        r.name.toLowerCase().includes(search) ||
        r.bank.toLowerCase().includes(search) ||
        r.accountNumber.includes(search),
    );
  }

  const pageSize = 8;
  const page = Math.max(1, Number(url.searchParams.get('page')) || 1);
  const { data, nextPage } = paginate(filtered, page, pageSize);

  return Response.json({ data, nextPage });
}

export async function GET_RECIPIENT(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  const url = new URL(request.url);
  const recipientId = url.searchParams.get('id');
  const recipient = recipients.find((r) => r.id === recipientId);
  return Response.json(recipient);
}
