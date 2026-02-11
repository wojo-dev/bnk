// verify-pin API
import { delay } from '@/server/helpers';
import { pin } from '@/server/pin';

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
  });
}
