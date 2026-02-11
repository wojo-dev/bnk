export const queryKeys = {
  balance: ['balance'] as const,
  profile: ['profile'] as const,
  recentRecipients: ['recent-recipients'] as const,
  recipients: (search?: string) => ['recipients', search] as const,
  transaction: (search?: string) => ['transaction', search] as const,
};
