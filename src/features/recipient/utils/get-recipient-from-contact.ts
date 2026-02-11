import { Recipient } from '@/features/recipient/types/recipient.types';
import { ExistingContact } from 'expo-contacts';

export function getRecipientFromContact(contact: ExistingContact): Recipient {
  const firstName = contact.firstName ?? '';
  const lastName = contact.lastName ?? '';

  return {
    id: contact.id ?? '',
    name: `${firstName} ${lastName}`.trim(),
    initials: `${firstName[0] ?? ''}${lastName[0] ?? ''}`.toUpperCase(),
    bank: '',
    bankCode: '',
    accountNumber: '',
    maskedNumber: '',
    isFavourite: false,
    avatarColor: 'blue',
    addedAt: '',
  };
}
