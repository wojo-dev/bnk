// history API

import { history } from '@/server/data/history.data';
import { requireAuth } from '@/server/utils/auth';
import { paginate } from '@/server/utils/helpers';

export async function GET(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  const url = new URL(request.url);
  const search = url.searchParams.get('q')?.toLowerCase();
  let filtered = [...history];

  if (search) {
    filtered = filtered.filter((t) => t.name.toLowerCase().includes(search));
  }

  const pageSize = 8;
  const page = Math.max(1, Number(url.searchParams.get('page')) || 1);
  const { data, nextPage } = paginate(filtered, page, pageSize);

  return Response.json({ data, nextPage });
}
