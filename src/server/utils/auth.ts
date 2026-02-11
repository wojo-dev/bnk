export const STUB_TOKEN = 'bnk-demo-token-2026';

export function requireAuth(request: Request): Response | null {
  const header = request.headers.get('Authorization');
  if (!header || !header.startsWith('Bearer ')) {
    return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const token = header.replace('Bearer ', '');
  if (token !== STUB_TOKEN) {
    return Response.json({ success: false, error: 'Invalid token' }, { status: 401 });
  }

  return null;
}
