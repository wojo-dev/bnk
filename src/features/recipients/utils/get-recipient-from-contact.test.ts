import { ExistingContact } from 'expo-contacts';
import { getRecipientFromContact } from './get-recipient-from-contact';

const makeContact = (overrides: Partial<ExistingContact> = {}): ExistingContact => ({
  contactType: 'person',
  id: '1',
  name: 'John Doe',
  firstName: 'John',
  lastName: 'Doe',
  ...overrides,
});

describe('getRecipientFromContact', () => {
  it('maps a contact to a recipient', () => {
    const result = getRecipientFromContact(makeContact());

    expect(result).toEqual({
      id: '1',
      name: 'John Doe',
      initials: 'JD',
      bank: '',
      bankCode: '',
      accountNumber: '',
      maskedNumber: '',
      isFavourite: false,
      avatarColor: 'blue',
      addedAt: '',
    });
  });

  it('handles missing firstName', () => {
    const result = getRecipientFromContact(makeContact({ firstName: undefined }));

    expect(result.name).toBe('Doe');
    expect(result.initials).toBe('D');
  });

  it('handles missing lastName', () => {
    const result = getRecipientFromContact(makeContact({ lastName: undefined }));

    expect(result.name).toBe('John');
    expect(result.initials).toBe('J');
  });

  it('handles missing both names', () => {
    const result = getRecipientFromContact(
      makeContact({ firstName: undefined, lastName: undefined }),
    );

    expect(result.name).toBe('');
    expect(result.initials).toBe('');
  });

  it('handles missing id', () => {
    const result = getRecipientFromContact(makeContact({ id: undefined }));

    expect(result.id).toBe('');
  });
});
