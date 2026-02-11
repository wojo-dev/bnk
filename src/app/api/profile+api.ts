import { profile } from '@/server/profile';

export async function GET() {
  return Response.json({ profile, success: true });
}
