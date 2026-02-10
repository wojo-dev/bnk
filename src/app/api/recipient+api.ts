import { Recipient } from '@/features/recipients/types/recipient';
import { recipients } from '@/server/recipients';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const recipientId = url.searchParams.get('id');
  const recipient = recipients.find((r: Recipient) => r.id === recipientId);
  return Response.json(recipient);
}
