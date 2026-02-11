import { Recipient } from '@/features/recipient/types/recipient.types';
import { recipients } from '@/server/data/recipients.data';
import { requireAuth } from '@/server/utils/auth';

export async function GET(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  const url = new URL(request.url);
  const recipientId = url.searchParams.get('id');
  const recipient = recipients.find((r: Recipient) => r.id === recipientId);
  return Response.json(recipient);
}
