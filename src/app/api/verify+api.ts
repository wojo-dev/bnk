// verify-pin API
import { pin } from '@/server/data/pin.data';
import { STUB_TOKEN } from '@/server/utils/auth';
import { delay } from '@/server/utils/helpers';

export async function POST(request: Request) {
  await delay(500);
  const { pin: inputPin } = (await request.json()) as { pin: string };

  if (!inputPin || inputPin !== pin.code) {
    return Response.json(
      {
        success: false,
        error: 'Invalid PIN',
      },
      {
        status: 401,
      },
    );
  }

  return Response.json({
    success: true,
    message: 'PIN verified',
    token: STUB_TOKEN,
  });
}
