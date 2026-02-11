import { requireAuth } from '@/server/auth';
import { recipients } from '@/server/recipients.data';

export async function GET(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  const recent = [...recipients]
    .sort((a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime())
    .slice(0, 6);

  return Response.json({ data: recent });
}
