import { paginate } from '@/server/helpers';
import { recipients } from '@/server/recipients';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const search = url.searchParams.get('q')?.toLowerCase();
  const favourites = url.searchParams.get('favourites');
  let filtered = [...recipients];

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

  const pageSize = 3;
  const page = Math.max(1, Number(url.searchParams.get('page')) || 1);
  const { data, nextPage } = paginate(filtered, page, pageSize);

  return Response.json({ data, nextPage });
}
