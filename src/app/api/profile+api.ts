import { requireAuth } from '@/server/auth';
import { profile } from '@/server/profile.data';

export async function GET(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  return Response.json({ profile, success: true });
}
