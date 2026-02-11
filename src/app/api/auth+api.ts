import { STUB_TOKEN } from '@/server/utils/auth';

export async function POST(request: Request) {
  const { method } = (await request.json()) as { method: string };

  if (method !== 'biometric') {
    return Response.json({ success: false, error: 'Unsupported auth method' }, { status: 400 });
  }

  return Response.json({
    success: true,
    token: STUB_TOKEN,
  });
}
