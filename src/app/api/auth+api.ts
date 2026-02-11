import { STUB_TOKEN } from '@/server/utils/auth';
import { delay } from '@/server/utils/helpers';

export async function POST(request: Request) {
  await delay(300);
  const { method } = (await request.json()) as { method: string };

  if (method !== 'biometric') {
    return Response.json({ success: false, error: 'Unsupported auth method' }, { status: 400 });
  }

  return Response.json({
    success: true,
    token: STUB_TOKEN,
  });
}
