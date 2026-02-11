import { profile } from '@/server/data/profile.data';
import { requireAuth } from '@/server/utils/auth';

export async function GET(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  return Response.json({ profile, success: true });
}
