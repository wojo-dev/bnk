import * as Contacts from 'expo-contacts';
import { useEffect, useState } from 'react';

export function useContacts() {
  // let user have the option to add contacts
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const [permissions, setPermissions] = useState<Contacts.PermissionStatus | null>(null);
  useEffect(() => {
    (async () => {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Emails],
      });
      setContacts(data);
      const { status } = await Contacts.requestPermissionsAsync();
      setPermissions(status);
    })();
  }, [permissions]);
  return {
    hasPermissions: permissions === 'granted',
    requestPermissions: () => Contacts.requestPermissionsAsync(),
    contacts,
    permissions,
  };
}
