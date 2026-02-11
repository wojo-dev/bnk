import { Recipient } from '@/features/recipients/types/recipient.types';
import { requireAuth } from '@/server/auth';
import { recipients } from '@/server/recipients.data';

export async function GET(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  const url = new URL(request.url);
  const recipientId = url.searchParams.get('id');
  const recipient = recipients.find((r: Recipient) => r.id === recipientId);
  return Response.json(recipient);
}
