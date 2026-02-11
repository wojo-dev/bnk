import { Recipient } from '@/features/recipient/types/recipient.types';
import { ExistingContact } from 'expo-contacts';

export function getRecipientFromContact(contact: ExistingContact): Recipient {
  const firstName = contact.firstName ?? '';
  const lastName = contact.lastName ?? '';
  const phoneNumber = contact.phoneNumbers?.[0]?.number ?? '';
  const masked = phoneNumber ? phoneNumber.slice(-4).padStart(phoneNumber.length, '*') : '';

  return {
    id: contact.id ?? '',
    name: `${firstName} ${lastName}`.trim(),
    initials: `${firstName[0] ?? ''}${lastName[0] ?? ''}`.toUpperCase(),
    bank: 'Mobile',
    bankCode: '',
    accountNumber: phoneNumber,
    maskedNumber: masked,
    isFavourite: false,
    avatarColor: 'blue',
    addedAt: '',
  };
}
