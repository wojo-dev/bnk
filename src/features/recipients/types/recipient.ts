export type Recipient = {
  id: string;
  name: string;
  initials: string;
  bank: string;
  bankCode: string;
  accountNumber: string;
  maskedNumber: string;
  isFavourite: boolean;
  avatarColor: string;
  addedAt: string;
};

export type RecipientsPaginatedResponse = {
  data: Recipient[];
  nextPage: number | null;
};
